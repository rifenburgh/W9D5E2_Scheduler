import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule-new',
  templateUrl: './schedule-new.component.html',
  styleUrls: ['./schedule-new.component.css']
})

export class ScheduleNewComponent implements OnInit {
  date: Object;
  formInfo              = {
    date:               '',
    time:               '',
    duration:           '',
    location:           'Miami, FL',
    instrument:         ''
  };
  constructor(
    private myService: ScheduleService,
    private mySession: SessionService
  ) { }

  ngOnInit() {
  }

  createNewItem(thing) {
    this.myService.createItem(thing)
      .then((apiResult) => {
        console.log(apiResult);
      })
      .catch((err) => {
        console.log('Error creating calendar item ', err);
      })

  }
  isLoggedIn() {
    const theObserve = this.mySession.isLoggedIn();

    theObserve.subscribe(
      result => console.log('success!!!!!!', result),
      err => console.log('failure!!!!!!', err)
    );

  }
}
