//File NOT Finished
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
To Be Development
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserComponent } from './user/user.component';
*/


const routes: Routes    = [
  {
    path:               '/teacher',
    children:           TeacherComponent
  },
  {
    path:               '/student',
    component:          StudentComponent
  },
  {
    path:               '/schedule',
    component:          ScheduleComponent
  },
  {
    //Wildcard
    path:               '**',
    redirectTo:         ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
