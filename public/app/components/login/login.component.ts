import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  errorMessage: string;
  credentials: any  = {};
  username: String;
  password: String;

  constructor(
    private loginService: LoginService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

  }


  signIn(){
    this.loginService.signin(this.credentials).subscribe(result => {
      if(!!result.success) {
        this.flashMessage.show('Something went wrong...', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Login successful', {cssClass: 'alert-success', timeout: 5000});
        // this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/home']);
      }
    });
      // this.router.navigate(['/']),
      // error =>this.errorMessage = error);
  } 

  /* onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(!!data.success){
        this.flashMessage.show('Something went wrong...', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Login successful', {cssClass: 'alert-success', timeout: 5000});
        // this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/home']);
      }
    });
  }
 */
}
