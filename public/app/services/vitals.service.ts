import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class VitalsService {

  private _baseURL = 'api/vitals';

  constructor(private _http: Http) { }

  ///api/vitals/list/:patientId
  list(patientId:string): Observable<any> {
    return this._http
      .get(`${this._baseURL}/list/${patientId}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error.message || 'Server error');
  }

}
