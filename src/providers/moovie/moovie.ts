import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMoovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/latest?api_key=")
  }

}
