import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
    selector: 'registro-form',
    templateUrl: 'registro-form.component.html',
    styleUrls: ['registro-form.component.css']
})
export class RegistroFormComponent {
    data: any;
  constructor(private _http: Http){}
 
   getPosts(){
        // petición por get a esa url de un api rest de pruebas
    return this._http.get("http://localhost:3000/users/user")
                            .map(res => this.data=res.json());
   }
}
