import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as constants from '../constants/constants';
import { User } from '../shared/user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

signUp(user: User) {
    return this.http.post(constants.ApiAddress + "/signup", user)
      .map((response: Response) => response.json())
      .catch((e: any) => Observable.throw(JSON.stringify(e)));
  }
}
