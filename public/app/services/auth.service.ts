import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private _http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post('api/signup', user, {headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post('api/signin', user, {headers: headers})
    .map(res => res.json());
  }

  /* getProfile(){
    let headers = new Headers();
    this.loadToken();

    // Authorization Header
    headers.append('Authorization', this.authToken);

    // Application/JSON Header
    headers.append('Content-Type', 'application/json');

    // Retrieves JSON information from server-side application (VIA NODE)
    return this._http.get('users/profile', {headers: headers})
    .map(res => res.json());
  } */

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Store user data
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Checks the token, if loggedin, will return token
  loggedIn(){
    return tokenNotExpired('id_token');
  }

  // Logout
  logout(){
    // Clears credentials
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
