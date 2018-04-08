import { Component } from '@angular/core';
import { LoginService } from "../login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string;
  credentials: any  = {};
  constructor(private loginService: LoginService, private router: Router) { }

  signIn(){
    this.loginService.signin(this.credentials).subscribe(result=>
      this.router.navigate(['/']),
      error =>this.errorMessage = error);
  }

}
