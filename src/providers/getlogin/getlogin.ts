import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  getRemoteData() {
    this.http.get('https://jsonplaceholder.typicode.com').subscribe(data => {
      console.log(data);

    });


  }
}
