import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user = window['user'];
  private signinUrl = 'api/signin';
  private _signupURL = 'api/auth/signup';

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
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Sends data to our backend node server
    return this.http.post('api/signup', user, { headers: headers })
      .map(res => res.json());
  }

  // Authenticate uiser service
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Sends data to our backend node server
    return this.http.post('api/signin', user, { headers: headers })
      .map(res => res.json());
  }

/* 
  // Get Profile
  getProfile() {
    let headers = new Headers();
    this.loadToken();

    // Authorization Header
    headers.append('Authorization', this.authToken);

    // Application/JSON Header
    headers.append('Content-Type', 'application/json');

    // Retrieves JSON information from server-side application (VIA NODE)
    return this.http.get('api/profile', { headers: headers })
      .map(res => res.json());
  }

  // Store user data
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Load token - fetch from localstorage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  } 
*/
  
  // Logout
  logout() {
    // Clears credentials
    // this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
