import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  public user = window['user'];
  private signinUrl = 'api/signin';

  constructor(private http: Http) { }
  isLoggedIn(): boolean {
    return (!!this.user);
  }
  signin(credentials: any): Observable<any> {
    const body = JSON.stringify(credentials);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.signinUrl, body, options)
      .map(res => this.user = res.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server Error');
  }

}
