//File NOT Completed
import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { SessionService } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  //The item that will be queried from this component's service
  items: Object;
  //Store any errors that are generated
  errorMessage:         string;
  calendars: Array<any> = [];

  constructor(
    private myService: ScheduleService,
    private mySession: SessionService,
    private myRoute: ActivatedRoute,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    // this.myRoute.params.subscribe((params) => {
    //   this.getDetails(params['id']);
    // });
    this.myService.getList()
      .then((item) => {
        this.calendars = item;
      })
  }

  // getDetails(id) {
  //   this.myService.get(id)
  //     .then((apiRequest) => {
  //       this.item = apiResult;
  //       console.log(this.item);
  //     })
  //     .catch((err) => {
  //       console.log('Error ', err);
  //     })
  // }


}
