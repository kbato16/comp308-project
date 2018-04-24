import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  credentials: any  = {};

  constructor(
    private authService: AuthService
  ) { 
    this.user = authService.user;
  }

  ngOnInit() {
    this.authService.signin(this.credentials).subscribe(profile => {
      this.user = profile.user;
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
