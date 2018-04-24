import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-daily-tip',
  templateUrl: './daily-tip.component.html',
  styleUrls: ['./daily-tip.component.scss']
})
export class DailyTipComponent implements OnInit {

  user: any;

  constructor(private authService: AuthService) { 
    this.user = authService.user;
  }

  ngOnInit() {
  }
}
