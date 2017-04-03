import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string      = 'http://localhost:3000';
  // BASE_URL: string      = '';


  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.BASE_URL}/api/signup`, user)
    // return this.http.post(`/api/signup`, user)

      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    //options will help support cross-domain functionality in Development enviornment
    const options = { withCredentials: true };
    return this.http.post(`${this.BASE_URL}/api/login`, user, options)
    // return this.http.post(`/api/login`, user, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    //{ withCredentials: true } is supposed to share cookies across different domains.  It does not seem to be working.
    const options       = { withCredentials: true };
    const myObservable  = this.http.get(`${this.BASE_URL}/api/loggedin`, options);
    myObservable.map(res => res.json());
    myObservable.catch(this.handleError);
    return myObservable;
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/api/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
