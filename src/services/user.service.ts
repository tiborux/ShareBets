import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RequestOptions, Response } from "@angular/http";
import { HttpService } from '../services/http.service';
import { Subject } from "rxjs/Subject";
import { Login } from "../models/login";

@Injectable()

export class UserService {

  constructor(private httpRequest: HttpService) { 
       this.boolSubject = new Subject<boolean>();
        this.myBool$ = this.boolSubject.asObservable();
        this.pagadoSubject = new Subject<boolean>();
        this.myPagado$ = this.boolSubject.asObservable();
  }

  login: Login = new Login("", "");
  private logged = new Subject<boolean>();
  status: boolean = false;
  beneficio: number;
  options: RequestOptions;
  id: number;
  // Observable string streams
  isLogged$ = this.logged.asObservable();
  myBool$: Observable<boolean>;
  private boolSubject: Subject<boolean>;

   myPagado$: Observable<boolean>;
  private pagadoSubject: Subject<boolean>;

  setLogin(user: string, password: string) {
    this.login = new Login(user, password);
  }
  getLogin() {
    return this.login;
  }

  //Para mirar si esta logeado

  //Ponemos que esta logueado y avisamos de que esta logueado
    setMyBool(newValue) {
      this.myBool$ = newValue;
      this.boolSubject.next(newValue);
    }
    setpagado(newValue) {
      this.myPagado$ = newValue;
      this.pagadoSubject.next(newValue);
    }
  //Add new user 
  registerUser(url, body) {
    return this.httpRequest.post(url, body);

  }
  loginUser(url, body) {
    return this.httpRequest.post(url, body);
  }

  logoutUser() {
    localStorage.removeItem('token');
  }

  getBets(url) {
    return this.httpRequest.get(url, this.options);
  }
   getBet(url) {
    return this.httpRequest.get(url, this.options);
  }

  getUsersBet(url) {
    return this.httpRequest.get(url, this.options);
  }

  createBet(url, body) {
    return this.httpRequest.post(url, body);
  }

  getMe(url) {
    return this.httpRequest.get(url, this.options);
  }
  getUser(url) {
    return this.httpRequest.get(url, this.options);
  }
  updateUser(url, body) {
    return this.httpRequest.put(url, body, this.options);
  }

  getHistory(url) {
    return this.httpRequest.get(url, this.options);
  }
  deleteUser(url) {
    return this.httpRequest.delete(url, this.options);
  }
  getEmail(url) {
    return this.httpRequest.get(url, this.options);
  }
  sendEmail(url, body) {
    return this.httpRequest.post(url, body, this.options);
  }
  getByToken(url) {
    return this.httpRequest.get(url, this.options);
  }
  updatePassword(url, body) {
    return this.httpRequest.put(url, body, this.options);
  }
  updateEstado(url, body) {
    return this.httpRequest.put(url, body, this.options);
  }
  setIdBet(id: number) {
    this.id = id;
  }
  getIdbet() {
    return this.id;
  }
  updateBet(url, body) {
    return this.httpRequest.put(url, body, this.options);
  }
  updatePago(url, body) {
    return this.httpRequest.put(url, body, this.options);
  }
  endBet(url, body) {
    return this.httpRequest.put(url, body, this.options);
  }
  setBeneficio(beneficio){
    this.beneficio=beneficio;
  }
  getBeneficio(){
    return this.beneficio;
  }
}
