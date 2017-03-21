import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UserService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  

}
