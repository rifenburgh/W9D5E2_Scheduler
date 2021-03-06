import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Music Scheduler';
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
