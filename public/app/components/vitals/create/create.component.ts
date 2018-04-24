import { Component, OnInit } from '@angular/core';
import { VitalsService } from '../../../services/vitals.service';
import { LoginService } from '../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) {
  }

  create() {
    this.vitalService.create(this.patientId, this.vitals)
      .subscribe(result => this.router.navigate(['/vitals', this.patientId]),
        error => this.errorMessage = error);
  }

  ngOnInit() {
    this.paramsObserver = this.route.parent.params.subscribe(params => {
      this.patientId = params['patientId'];
    });
  }
}
