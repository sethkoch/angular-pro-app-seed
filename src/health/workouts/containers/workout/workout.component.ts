import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'workout',
  styleUrls: ['workout.component.scss'],
  template: `
    <div class="workout">
      <div class="workout__title">
        <h1>
          <img src="/img/workout.svg">
          <span *ngIf="workout$ | async as workout; else title;">
          {{ workout.name ? 'Edit' : 'Create' }} workout 
          </span>
          <ng-template #title>
            Loading ...
          </ng-template>
        </h1>
      </div>
      <div *ngIf="workout$ | async as workout; else loading;">
        <workout-form
        [workout]="workout"
        (create)="addWorkout($event)"
        (update)="updateWorkout($event)"
        (remove)="removeWorkout($event)">
        </workout-form>
      </div>
      <ng-template #loading>
        Fetching workout ...
      </ng-template>
    </div>
  `
})
export class WorkoutComponent implements OnInit, OnDestroy {

  workout$: Observable<Workout>;
  subscription: Subscription;

  constructor(
    private workouts: WorkoutsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.workouts.workouts$.subscribe();
    this.workout$ = this.route.params
      .switchMap( param => {
        return this.workouts.getWorkout(param.id);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addWorkout(event: Workout) {
    await this.workouts.addWorkout(event)
    this.backToWorkouts();
  }

  async updateWorkout(event: Workout) {
    const key = this.route.snapshot.params.id;
    await this.workouts.updateWorkout(key, event);
    this.backToWorkouts();

  }

  async removeWorkout() {
    const key = this.route.snapshot.params.id;
    await this.workouts.removeWorkout(key);
    this.backToWorkouts();
  }

  backToWorkouts() {
    this.router.navigate(['workouts'])
  }
}