import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private authService: AuthService) {
    this.user = authService.user;
   }

  ngOnInit() {
  }
  
  ngDoCheck(){
    this.user = this.authService.user;
  }

}
