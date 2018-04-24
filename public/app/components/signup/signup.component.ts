import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  gender: Boolean;
  userType: Boolean;
  firstName: String;
  lastName: String;
  dob: String;
  address: String;
  city: String;
  prov: String;
  email: String;
  phone: String;
  username: String;
  password: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      gender: this.gender,
      userType: this.userType,
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      address: this.address,
      city: this.city,
      prov: this.prov,
      phone: this.phone,
      email: this.email,
      username: this.username,
      password: this.password
    }

    const err = [];

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      if(user.gender == null){
        err.push('GENDER')
      } 

      if(!user.firstName){
        err.push('FIRST NAME')
      }

      if(!user.lastName){
        err.push('LAST NAME')
      }

      if(!user.dob){
        err.push('DOB')
      }

      if(!user.address){
        err.push('ADDRESS')
      }

      if(!user.city){
        err.push('CITY')
      }

      if(!user.prov){
        err.push('PROVINCE')
      }
      
      if(!user.phone){
        err.push('PHONE')
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
