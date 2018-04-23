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

  // Register user service
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Sends data to our backend node server
    return this.http.post('api/signup', user, {headers: headers})
    .map(res => res.json());
  }

  // Authenticate user service
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Sends data to our backend node server
    return this.http.post('api/signin', user, {headers: headers})
    .map(res => res.json());
  }
}
