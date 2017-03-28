//File NOT Finished
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {
                        
  BASE_URL: string      = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/students`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/students/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  delete(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/userdelete/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  /*
  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/students/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  */

}
