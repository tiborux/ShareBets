import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }

  get(url, options: RequestOptions): Observable<any> {
    return this.http.get(url, this.setOptions(options))
      .map(this.extractData)
      .catch((error: any) => {
        throw (error.json() || 'Server error'); //Show errors if any
      })
  }

  post(url, body, options: any = {}): Observable<any> {
    return this.http.post(url, body, this.setOptions(options))
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //Show errors if any
  }

  put(url, body, options) {
    return this.http.put(url, body, this.setOptions(options))
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //Show errors if any
  }

  delete(url, options) {
    return this.http.delete(url, this.setOptions(options))
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //Show errors if any
  }

  setOptions(options: any = {}) {
    let headers = new Headers({ 
      'Content-Type': 'application/json',
      'authorization':'Bearer ' + window.localStorage.getItem('token')
     }); // ... Set content type to JSON
      return new RequestOptions({ headers: headers });
  }

  extractData(res: Response) {
    let body: any = res.json();

    return body || {};
  }
}