import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ServicerProvider {



 constructor(public http: Http) {}
 getData(){
    return this.http.get('http://localhost:83/Xampp/api/api/api.Recupera.php').map(res=>res.json())
   }
}
      


        




 

  


