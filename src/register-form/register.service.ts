import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { RequestOptions,Response } from "@angular/http";
import {HttpService} from '../services/http.service';

@Injectable()
export class RegisterService {

  constructor(private user: HttpService) { }

  url_base:string='http://localhost:3000/users';
options: RequestOptions;
  //Add new user 
  registerUser(body){
    return this.user.post(this.url_base,body,this.options)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //Show errors if any
  }
}