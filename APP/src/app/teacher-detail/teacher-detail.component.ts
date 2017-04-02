//File NOT Finished
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { ScheduleService } from '../services/schedule.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  items: Array<any>     = [];
  person: Object        = {};
  errorMessage:         string;
  persons: Array<any>   = [];
  calendars: Array<any> = [];
  myCalendar: Array<any>= [];

  constructor(
    private myService:  TeacherService,
    private myRoute:    ActivatedRoute,
    private mySchedule: ScheduleService,
    private myNavigator:Router,
    private mySession:  SessionService
  ) { }

  ngOnInit() {
    // this.myRoute.params.subscribe((params) => {
    //   this.getDetails(params['id']);
    // });
    this.mySession.isLoggedIn()
      .subscribe( (user) => {
      this.person = user.json();
    this.mySchedule.availableClass()
      .then( (classes) => { this.calendars = classes })
    this.mySchedule.myClass()
      .then((classes) => {this.myCalendar = classes })
     })

  }
  getDetails(id) {
    this.myService.get(id)
      .then((apiResult) => {
        this.person = apiResult;
        this.items.push(this.person);
        console.log('Teach-Details-Component: ', this.items);
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }
  deleteSchedule(id) {
    if(!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }
    this.mySchedule.delete(id)
      .then((apiResult) => {
        this.myNavigator.navigate(['/']);
      })
      this.myNavigator(['']);
      .catch((err) => {
        console.log('There was an error deleting this item.');
      });
  }

}
