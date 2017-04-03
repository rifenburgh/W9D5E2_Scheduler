//File NOT Finished
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ScheduleService } from '../services/schedule.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  items: Array<any>     = [];
  person: Object        = {};
  errorMessage:         string;
  persons: Array<any>   = [];
  calendars: Array<any> = [];
  myCalendar: Array<any>= [];

  constructor(
    private myService:  StudentService,
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
      .subscribe((user) => {
        this.person = user.json();
    //search for all of the open classes
    this.mySchedule.availableClass()
      .then((classes) => { this.calendars = classes })
    this.mySchedule.myClass()
      .then((classes) => { this.myCalendar = classes })
    })
  }

  getDetails(id) {
    this.myService.get(id)
      .then((apiResult) => {
        this.person     = apiResult;
        this.items.push(this.person);
        console.log(this.items);
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }

  //Delete Indiviudal Item
  deleteSchedule(id) {
    // if(!window.confirm('Are you sure you want to delete this project?')) {
    //   return;
    // }
    console.log('delete-student-detail', id);
    this.mySchedule.delete(id)// Delete Component Function
      .then((apiResult) => {
        // this.myNavigator.navigate(['/']);
      })

        // this.myNavigator(['']);

      .catch((err) => {
        console.log('There was an error deleting this item.');
      });
  }
  scheduleRegister(item) {
    console.log('scheduleRegister', item);
    const localItem = this.person;
    console.log('localItem', item);
      this.mySchedule.register(item, localItem)
        // .toPromise()
        .then((apiResult) => {
      })
      .catch((err) => {
        console.log('There was an issue registering for this class.');
      });
  }


}
