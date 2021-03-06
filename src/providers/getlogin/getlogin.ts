import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
/*
  Generated class for the GetloginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GetloginProvider {

  constructor(public http: Http) {
    console.log('Hello GetloginProvider Provider');
  }
  getComments(): Observable<any> {
    return this.http.get('http://7403cf88.ngrok.io/data').map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error || 'Server error'));

  };


}

