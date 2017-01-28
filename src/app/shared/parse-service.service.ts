import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Condo } from './condo';
import * as constants from '../constants/constants';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ParseServiceService {

  private serverCondoUrl = 'https://parseapi.back4app.com/classes/Condo';

  _condos: Condo[] = [];
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    this.headers.append('X-Parse-Application-Id', constants.AppId);
    this.headers.append('X-Parse-REST-API-Key', constants.AppKey);
  }

  getCondos(user): Observable<any[]> {
    //let params = new URLSearchParams();
    //params.set('where', JSON.stringify({
    // "syndic": user
    // }));
    return this.http.get(this.serverCondoUrl, {
      headers: this.headers//,
      //search: params
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
