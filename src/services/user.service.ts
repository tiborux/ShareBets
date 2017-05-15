import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RequestOptions, Response } from "@angular/http";
import { HttpService } from '../services/http.service';
import { Subject } from "rxjs/Subject";
import { Login } from "../models/login";

@Injectable()

export class UserService {

  constructor(private httpRequest: HttpService) { }

  login: Login = new Login("", "");
  private logged = new Subject<boolean>();
  status: boolean = false;
  // Observable string streams
  isLogged$ = this.logged.asObservable();

  setLogin(user: string, password: string) {
    this.login = new Login(user, password);
  }
  getLogin() {
    return this.login;
  }

  //Para mirar si esta logeado
  isLogged() {
    return this.logged.next(this.status);
  }
  //Ponemos que esta logueado y avisamos de que esta logueado
  setLogged(status:boolean){
    this.status = status;
    this.isLogged();
  }
  //Add new user 
  registerUser(url, body) {
    return this.httpRequest.post(url, body);

  }
  loginUser(url, body) {
    return this.httpRequest.post(url, body);
  }
}