import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.BASE_URL}/api/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    console.log("we in.....");
    return this.http.post(`${this.BASE_URL}/api/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.BASE_URL}/api/loggedin`)
      .map(res => res.json())
      .catch((err) => this.handleError(err));
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/api/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
