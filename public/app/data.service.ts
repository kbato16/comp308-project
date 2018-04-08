import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result: any;
  constructor(private http: Http) { }
  getStudents() {
    return this.http.get('/api/students');
  }
}
