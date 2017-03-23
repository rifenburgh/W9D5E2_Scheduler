//File NOT Finished
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ScheduleService } from '../services/schedule.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  items: Array<any> = [];
  person: Object = {};
  errorMessage: string;

  constructor(
    private myService: StudentService,
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
        console.log(this.items);
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }

}
