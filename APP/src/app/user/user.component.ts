import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  date: Object;
  formInfo = {
    username: '',
    password: '',
    name: '',
    instrument: '',
    location: '',
    phone: '',
    bio: '',
    email: '',

  };
  user: any;
  error: string;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.date = new Date();
    console.log(this.date);
  }


 login() {
   this.session.login(this.formInfo)
     .subscribe(
       (user) => this.user = user,
       (err) => this.error = err
     );
 }

 signup() {
   this.session.signup(this.formInfo)
     .subscribe(
       (user) => this.user = user,
       (err) => this.error = err
     );
 }

}
