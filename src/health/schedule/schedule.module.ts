import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { ScheduleCalenderComponent } from './components/schedule-calender/schedule-calender.component'
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component'
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component'

//containers
import { ScheduleComponent } from './containers/schedule/schedule.component';

const ROUTES: Routes = [
    {path: '', component: ScheduleComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    declarations: [
        ScheduleComponent,
        ScheduleCalenderComponent,
        ScheduleDaysComponent,
        ScheduleControlsComponent
    ]
})
export class ScheduleModule {}