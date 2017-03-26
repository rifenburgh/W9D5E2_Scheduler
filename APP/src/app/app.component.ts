import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'W9D5E2';
  person: Object = {};

  constructor(
    private mySession: SessionService
  ) {}
  ngOnInit() {
    this.mySession.isLoggedIn()
      .subscribe((user) => {
        this.person = user.json();
      })
  }
}
