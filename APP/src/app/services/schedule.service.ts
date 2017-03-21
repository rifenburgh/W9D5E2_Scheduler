//File NOT Finsihed
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ScheduleService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/schedule`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

}
