//File NOT Completed
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  //The item that will be queried from this component's service
  items: Object;
  //Store any errors that are generated
  errorMessage:         string;

  constructor(
    private myService:    TeacherService,
    private myRoute:      ActivatedRoute,
    private myNavigator:  Router
  ) { }

  ngOnInit() {
    // this.myRoute.params.subscribe((params) => {
    //   this.getDetails(params['id']);
    // });
    this.myService.getList()
      .then((item) => {
        this.items      = item;
        console.log(this.items);
      })
  }
  getDetails(id) {
    this.myService.get(id)
      .then((apiResult) => {
        this.items      = apiResult;
        console.log(this.items);
      })
  }
                        
  /*
  deleteItem() {
    if(!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }
    this.myService.remove(this.item['_id'])
      .then((apiResult) => {
        this.myNavigator.navigate(['/']);
        console.log(apiResult);
      })
      .catch((err) => {
        this.errorMessage = 'Could not delete this item.';
        console.log('Delete Item Error', err);
      });
  }
  */
}
