import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as constants from '../../constants/constants';

import { User } from '../../_models/user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  signUp(user: User) {
    return this.http.post(constants.ApiAddress + '/signup', user).map((response: Response) => response.json());
  }

  getAll() {
    return this.http.get(constants.ApiAddress + '/user', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get(constants.ApiAddress + '/user/' + id, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(constants.ApiAddress + '/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(constants.ApiAddress + '/user/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + token });
      return new RequestOptions({ headers: headers });
    }
  }
}
