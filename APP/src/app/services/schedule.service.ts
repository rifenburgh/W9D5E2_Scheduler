//File NOT Finsihed
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import                  'rxjs/add/operator/toPromise';

@Injectable()
export class ScheduleService {

  BASE_URL: string      = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/schedule`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  //Create New Calendar Item
  createItem(item) {
    const options       = { withCredentials: true };

    console.log('createItem', item);
    return this.myHttp.post(`${this.BASE_URL}/api/schedulenew`, item, options)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  availableClass() {
    //Search Schedule database for available clases
    const options       = { withCredentials: true };
    return this.myHttp.get(`${this.BASE_URL}/api/availableclass`, options)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  myClass() {
    console.log(this.BASE_URL);
    const options       = { withCredentials: true };
    return this.myHttp.get(`${this.BASE_URL}/api/notavailable`, options)
      .toPromise()
      .then(apiResponse => {
        console.log(apiResponse);
        return apiResponse.json();
      })
  }

  delete(item) {
    const options       = { withCredentials: true };
    console.log('delete-schedule', item);
    return this.myHttp.post(`${this.BASE_URL}/api/scheduledelete/${item}`, options)
      .toPromise()
      .then(apiResponse => {
        console.log('delete-schedule-apiReponse', apiResponse);

        return apiResponse.json();
      })
      .catch((err) => {
        console.log('delete-schedule-apiResponse error', err);
      })

  }

  register(item, id) {
    const options = { withCredentials: true };
    //Student to register to a class
    console.log(`${this.BASE_URL}/api/scheduleregister/${item}/${id._id}`)
    return this.myHttp.post(`${this.BASE_URL}/api/scheduleregister/${item}/${id._id}`, item, options)
      .toPromise()
      .then(apiResponse => {
        console.log('schedule-register', apiResponse);
        console.log('user._id', id._id);
        return apiResponse.json();
      })
      .catch((err) => {
        console.log('schedule-register-error', err);
        return err.json();
      })
  //return;
  }

}
