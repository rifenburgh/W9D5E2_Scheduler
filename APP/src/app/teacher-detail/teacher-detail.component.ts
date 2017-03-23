//File NOT Finished
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { ScheduleService } from '../services/schedule.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  items: Array<any> = [];
  person: Object = {};
  errorMessage: string;

  constructor(
    private myService: TeacherService,
    private myRoute: ActivatedRoute,
    private mySchedule: ScheduleService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getDetails(params['id']);

    });

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

}
