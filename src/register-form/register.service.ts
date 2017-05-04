import { User } from './../models/user';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  constructor(private http: Http) { }

  url_base:string='http://localhost:3000';

  //Get all users
  getUsers() : Observable<User[]> {
    return this.http.get(this.url_base+'/users')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  //Add new user 
  addUser(body: Object): Observable<User[]> {
    return this.http.post(this.url_base+'/newuser', body)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //Show errors if any
  }




}