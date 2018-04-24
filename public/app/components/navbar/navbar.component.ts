import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
    this.user = authService.user;
  }
  
  ngOnInit() {
  }
  
  ngDoCheck() {
    this.user = this.authService.user;
  }
  
  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('Logout successful', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/login']);
    return false;
  }
}
