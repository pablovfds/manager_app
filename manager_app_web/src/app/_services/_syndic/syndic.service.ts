import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as constants from '../../constants/constants';

import { Syndic } from '../../_models/syndic';

@Injectable()
export class SyndicService {

  constructor(private http: Http) { }

  create(id: string) {

    const body = {
      accountId : id
    };

    return this.http.post(constants.ApiAddress + '/syndic', body, this.jwt()).map((response: Response) => response.json());
  }

  getAll() {
    return this.http.get(constants.ApiAddress + '/syndic', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: Syndic) {
    return this.http.get(constants.ApiAddress + '/syndic/' + id, this.jwt()).map((response: Response) => response.json());
  }

  update(syndic: Syndic) {
    return this.http.put(constants.ApiAddress + '/syndic/' + syndic.id, syndic, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: string) {
    return this.http.delete(constants.ApiAddress + '/syndic/' + id, this.jwt()).map((response: Response) => response.json());
  }

  getByUserId(id: string) {
    return this.http.get(constants.ApiAddress + '/syndic/account/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + token });
      return new RequestOptions({ headers: headers });
    }
  }

}
