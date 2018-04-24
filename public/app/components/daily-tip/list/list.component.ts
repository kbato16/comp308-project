import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DailyTipService } from '../../../services/daily-tip.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DailyTipListComponent implements OnInit {
  user: any = {};
  paramsObserver:any;
  dailyTips:any;
  errorMessage:string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private dailyTipService: DailyTipService) { 
      this.user = authService.user;
    }

    ngOnInit() {
      this.dailyTipService.listByPatientId(this.user.patientId).subscribe(dailyTips => {
        this.dailyTips = dailyTips;
        console.log(this.dailyTips);
      }, 
        error => this.errorMessage = error);
    }

}
