import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  firstName: String;
  lastName: String;
  dob: String;
  address: String;
  city: String;
  prov: String;
  email: String;
  phone: String;
  password: String;
  username: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private loginService: LoginService,
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password
    }

    const err = [];

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      if(!user.firstName){
        err.push('FIRST NAME')
      }

      if(!user.lastName){
        err.push('LAST NAME')
      }

      if(!user.email){
        err.push('EMAIL')
      }
      
      if(!user.username){
        err.push('USERNAME')
      }

      if(!user.password){
        err.push('PASSWORD')
      }

      this.flashMessage.show('Please fill in all fields: ' + err, {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } 

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register User
    this.authService.registerUser(user)
    .subscribe(data => {
      if(data.success){
        this.flashMessage.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/signup']);
      } else {
        this.flashMessage.show('You are now registered.  You can now login.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      }
    });
  }
}
