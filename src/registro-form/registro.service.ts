import { Usuario } from './../modelos/usuario';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistroService {
  constructor(private http: Http) { }

  url_base:string='http://localhost:3000';

  //Coger los usuarios
  getUsers() : Observable<Usuario[]> {
    return this.http.get(this.url_base+'/users')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error en el servidor'));
    ;
  }

  //Añadir nuevo usuario
  addUser(body: Object): Observable<Usuario[]> {
    return this.http.post(this.url_base+'/newuser', body)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //Mostramos errores si los hay
  }




}