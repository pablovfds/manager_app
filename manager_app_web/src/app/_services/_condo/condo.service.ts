import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';

import { Condo } from '../../_models/condo';

import * as constants from '../../constants/constants';

@Injectable()
export class CondoService {

  constructor(private http: Http) { }

    getAll() {
        return this.http.get(constants.ApiAddress + '/condo', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: string) {
        return this.http.get(constants.ApiAddress + '/condo/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(condo: Condo) {
        return this.http.post(constants.ApiAddress + '/condo', condo, this.jwt()).map((response: Response) => response.json());
    }

    update(condo: Condo) {
        return this.http.put(constants.ApiAddress + '/condo/' + condo.id, condo, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: string) {
        return this.http.delete(constants.ApiAddress + '/condo/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getByUserId(id: string){
      let params: URLSearchParams = new URLSearchParams();
      params.set('userid', id);
      this.jwt().search = params;
      return this.http.get(constants.ApiAddress + '/condo', this.jwt()).map((response: Response) => response.json());
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
