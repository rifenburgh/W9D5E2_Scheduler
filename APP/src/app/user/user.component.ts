import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  date: Object;
  constructor() { }

  ngOnInit() {
    this.date = new Date();
    console.log(this.date);
  }

}
