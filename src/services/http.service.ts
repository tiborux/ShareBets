import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }
  
  get(url, options: RequestOptions){
    return this.http.get(url, this.setOptions(options));
  }

  post(url, body, options) {
     return this.http.post(url, body, this.setOptions(options));
  }

  put(url, body, options) {
    return this.http.put(url, body, this.setOptions(options));
  }

  delete(url, options) {
    return this.http.delete(url, this.setOptions(options));
  }

  setOptions(options: any = {}) {
    if (!options.headers) {
      options.headers = {};
    }

    options.headers.set('authorization', 'Bearer ' + window.localStorage.getItem('token')); 
    return options;
  }
}