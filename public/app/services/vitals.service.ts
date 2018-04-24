import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class VitalsService {

  private _baseURL = 'api/vitals';
  vitals: any = {};

  constructor(private _http: Http) { }

  /// api/vitals/list/:patientId
  list(patientId: string): Observable<any> {
    return this._http
      .get(`${this._baseURL}/list/${patientId}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  /// api/vitals/create/:patientId
  create(patientId: string, vitals): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('User ID: ' + patientId);
    // Sends data to our backend node server
    return this._http.post(`${this._baseURL}/create/${patientId}`, vitals, { headers: headers })
      .map(res => res.json());
  }

  private handleError(error: Response | any) {
    return Observable.throw(error.message || 'Server error');
  }
}
