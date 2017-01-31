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

  getCondos(user): Observable<any[]> {
    return this.http.get(this.serverCondoUrl, {
      headers: this.headers
    }).map((res: Response) => res.json())
      .map((condos: any) => {
        let result: Condo[] = [];
        if (condos && condos.results) {
          condos.results.forEach((obj) => {
            if (obj.syndic && obj.syndic.objectId === user.id) {
              var condo: Condo = new Condo();
              condo.objectId = obj.objectId;
              condo.name = obj.name;
              result.push(condo);
            }
          });
        }
        return result;
      })
      .catch((error: any) => Observable.throw(error.message || 'Server error'));
  }

}
