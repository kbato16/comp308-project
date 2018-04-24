import { Component, OnInit } from '@angular/core';
import { VitalsService } from '../../../services/vitals.service';
import { LoginService } from '../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class VitalsCreateComponent implements OnInit {
  user: any;
  vitals: any = {};
  errorMessage: string;
  paramsObserver: any;
  patientId: string;

  constructor(private vitalService: VitalsService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) {
  }

  create() {
    this.vitalService.create(this.patientId, this.vitals)
      .subscribe(result => this.router.navigate(['/vitals', this.patientId]), error => this.errorMessage = error);
  }

  diagnose() {
    this.vitalService.diagnose(this.vitals).subscribe(result => {
      if(result.success) {
        console.log(result);
        this.flashMessage.show(`Diagnosis: ${result}`, {cssClass: 'alert-success', timeout: 5000});
      }
    });
  }
  ngOnInit() {
    this.paramsObserver = this.route.parent.params.subscribe(params => {
      this.patientId = params['patientId'];
    });
  }
}
