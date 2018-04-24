import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class DailyTipService {

  private _baseURL = 'api/dailyTip';

  constructor(private _http: Http) { }

  ///api/dailyTip/create/:patientId
  create(patientId:string, dailyTip: any): Observable<any> {
    return this._http
        .post(`${this._baseURL}/create/${patientId}`, dailyTip)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  } 

  private handleError(error: Response | any) {
    return Observable.throw(error.message || 'Server error');
  }

}
