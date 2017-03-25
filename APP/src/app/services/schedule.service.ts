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
  //Create New Calendar Item
  createItem(item) {
    const options = { withCredentials: true };

    console.log('createItem', item);
    return this.myHttp.post(`${this.BASE_URL}/api/schedulenew`, item, options)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  availableClass() {
    //Search Schedule database for available clases
    const options = { withCredentials: true };
    return this.myHttp.get(`${this.BASE_URL}/api/availableclass`, options)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  myClass() {
    console.log(this.BASE_URL);

    const options = { withCredentials: true };
    return this.myHttp.get(`${this.BASE_URL}/api/myclass`, options)
      .toPromise()
      .then(apiResponse => {
        console.log(apiResponse);
        return apiResponse.json();
      })
  }
  

}
