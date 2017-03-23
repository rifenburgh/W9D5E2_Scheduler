import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
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
    let options = new RequestOptions({ withCredentials: true });
    return this.http.post(`${this.BASE_URL}/api/login`, user, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }
  //{ withCredentials: true } pushes the cookie across different domains
  isLoggedIn() {
    let options = new RequestOptions({ withCredentials: true });
    const myObservable = this.http.get(`${this.BASE_URL}/api/loggedin`, options);
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
