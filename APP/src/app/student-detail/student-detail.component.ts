//File NOT Finished
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  item: Object;
  errorMessage: string;

  constructor(
    private myService: StudentService,
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
      .then((apiResult => {
        this.item = apiResult;;
      })
      .catch((err) => {
        console.log('Error ', err);
      })
  }

}
