import { Component, Input } from '@angular/core';

@Component({
  selector: 'schedule-calender',
  styleUrls: ['schedule-calender.component.scss'],
  template: `
    <div class="calender">
      {{ date | json }}
    </div>
  `
})

export class ScheduleCalenderComponent {

  @Input()
  date: Date;

  constructor() {}
}