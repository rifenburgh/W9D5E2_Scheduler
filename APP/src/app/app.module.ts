import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScheduleService } from './services/schedule.service';
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { UserService } from './services/user.service';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserComponent } from './user/user.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ScheduleComponent,
    UserComponent,
    StudentDetailComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ScheduleService, StudentService, TeacherService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
