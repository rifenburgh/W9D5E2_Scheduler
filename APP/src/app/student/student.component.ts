//File NOT Completed
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private myService:    StudentService,
    private myRoute:      ActivatedRoute,
    private myNavigator:  Router
  ) { }
  //The item that will be queried from this component's service
  item: Object;
  //Store any errors that are generated
  errorMessage:         string;

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getDetails(param['id']);
    });
  }

}
