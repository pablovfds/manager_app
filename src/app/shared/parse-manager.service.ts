import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from './user';
import { Condo } from './condo';
import * as constants from '../constants/constants';

var Parse = require('parse').Parse;

@Injectable()
export class ParseManagerService {

  private serverCondoUrl: string;
  private serverUsersUrl: string;

  _condos: Condo[] = [];
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    this.headers.append('X-Parse-Application-Id', constants.AppId);
    this.headers.append('X-Parse-REST-API-Key', constants.AppKey);

    this.serverCondoUrl = constants.ApiAddress + 'classes/Condo';
    this.serverUsersUrl = constants + 'users';
  }

  signUp(user: User) {
    return this.http.post(constants.ApiAddress + 'users', user, {
      headers: this.headers
    }).map((response: Response) => response.json())
      .catch((e: any) => Observable.throw(e.json().error));
  }

  logIn(user: User): Observable<User> {
    this.headers.append('X-Parse-Revocable-Session', '1');
    let params: URLSearchParams = new URLSearchParams();
    params.set('username', user.username);
    params.set('password', user.password);

    return this.http.get(constants.ApiAddress + 'login',
      {
        headers: this.headers,
        search: params
      }).map((response: Response) => response.json())
      .catch((e: any) => Observable.throw(e.json().error));
  }

  addCondo(condo: Condo) {
    return this.http.post(this.serverCondoUrl, condo, {
      headers: this.headers
    }).map((response: Response) => response.json())
      .catch((e: any) => Observable.throw(e.json().error));
  }

  getCondos(objectId): Observable<Condo[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('where', JSON.stringify({"syndic": this.getUserPointer()}));

    return this.http.get(this.serverCondoUrl, {
      headers: this.headers,
      search: params
    }).map((res: Response) => res.json())
      .map((condos: any) => {
        let result: Condo[] = [];

        condos.results.forEach((obj) => {

          var condo: Condo = new Condo();
          condo.objectId = obj.objectId;
          condo.name = obj.name;
          result.push(condo);

        });

        return result;
      })
      .catch((error: any) => Observable.throw(error.message || 'Server error'));
  }

  getUserLogged() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getUserPointer() {
    var user = new Parse.User();
    user.set("id", this.getUserLogged().objectId);
    return user.toPointer();
  }

}
