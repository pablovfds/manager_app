import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as constants from '../constants/constants';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string) {

    let body = {
      email: username,
      password: password
    };

    return this.http.post(constants.ApiAddress + "/login", JSON.stringify(body))
      .map((response: Response) => {
        let data = response.json();
        console.log(response.json().message);

        if (data && data.token) {
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          localStorage.setItem('token', JSON.stringify(data.token));
        }

        return data.message;
      })
      .catch((e: any) => Observable.throw(JSON.stringify(e)));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

}
