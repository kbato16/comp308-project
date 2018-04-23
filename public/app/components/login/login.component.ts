import { Component } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string;
  credentials: any  = {};
  constructor(
    private loginService: LoginService, 
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  username: String;
  password: String;

  signIn(){
    this.loginService.signin(this.credentials).subscribe(result=>
      this.router.navigate(['/']),
      error =>this.errorMessage = error);
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.loginService.authenticateUser(user).subscribe(data => {
      if(data.success){
        // this.loginService.storeUserData(data.token, data.user);
        this.flashMessage.show('Login successful', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/home']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      }
    });
  }

}
