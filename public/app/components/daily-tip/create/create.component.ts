import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DailyTipService } from '../../../services/daily-tip.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class DailyTipCreateComponent implements OnInit {

  paramsObserver:any;
  dailyTip:any = {};
  patientId:any = {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dailyTipService: DailyTipService) { 

  }
  
  ngOnInit() {
    this.paramsObserver = this.route.parent.params.subscribe(params => {
      this.patientId = params['patientId'];
      console.log(this.patientId);
    });
  }

  send() {
    console.log("Send tip!:" + this.dailyTip);
    this.dailyTipService
    .create(this.patientId, this.dailyTip)
    .subscribe(
      vitalsList => {
        this.router.navigate(['/home'])
      },
      error => {
        //this.router.navigate(['/users'])
      }
    );
  }
}
