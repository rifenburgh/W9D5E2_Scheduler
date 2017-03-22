//File NOT Finished
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Angular Components
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserComponent } from './user/user.component';



const routes: Routes    = [
  {
    path:               '',
    component:           UserComponent
  },

  {
    path:               'teachers',
    component:           TeacherComponent
  },
  {
    path:               'teachers/:id',
    component:           TeacherDetailComponent
  },

  {
    path:               'students',
    component:          StudentComponent
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
    path:               'login',
    component:          UserComponent
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
