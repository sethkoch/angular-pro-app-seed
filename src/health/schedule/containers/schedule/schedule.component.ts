import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from 'store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ScheduleService } from '../../../shared/services/schedule/schedule.service';

@Component({
  selector: 'schedule',
  styleUrls: ['schedule.component.scss'],
  template: `
    <div class="schedule">
      <schedule-calender
        [date]="date$ | async">
      </schedule-calender>
    </div>
  `
})
export class ScheduleComponent {

  date$: Observable<Date>;
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit() {

  }

  ngOnDestory() {

  }

}