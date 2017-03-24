//File NOT Finished
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Angular Components
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { ScheduleNewComponent } from './schedule-new/schedule-new.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LandingComponent } from './landing/landing.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserComponent } from './user/user.component';



const routes: Routes    = [
  {
    path:               '',
    component:           LandingComponent
  },

  {
    path:               'signup',
    component:           UserComponent
  },

  {
    path:               'login',
    component:           UserComponent
  },

  {
    path:               'teachers',
    component:           TeacherComponent
  },
  {
    path:               'myclass',
    component:           TeacherDetailComponent
  },

  {
    path:               'students',
    component:          StudentComponent
  },
  {
    path:               'student',
    component:           StudentDetailComponent
  },

  {
    path:               'students/:id',
    component:           StudentDetailComponent
  },

  {
    path:               'schedule',
    component:          ScheduleComponent
  },
  {
    path:               'schedulenew',
    component:          ScheduleNewComponent
  },

  {
    path:               'login',
    component:          UserComponent
  }

  // {
  //   //Wildcard - turned off for authenticated users
  //   path:               '**',
  //   redirectTo:         ''
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
