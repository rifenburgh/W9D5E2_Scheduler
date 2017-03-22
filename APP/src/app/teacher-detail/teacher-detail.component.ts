//File NOT Finished
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  items: Object = {};
  errorMessage: string;

  constructor(
    private myService: TeacherService,
    private myRoute: ActivatedRoute,
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
        this.items = apiResult;
        console.log(this.items);
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }

}
