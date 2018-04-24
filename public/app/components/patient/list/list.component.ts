import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PatientListComponent implements OnInit {

  user: any = {};
  paramsObserver:any;
  patients:any;
  errorMessage: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { 

      this.user = authService.user;
    }

  add(patientID:any) {
    console.log("Add my patient!");

  }

  send(patientID:any) {
    this.router.navigate(['dailyTip', patientID, 'create']);
  }

  enterVitals(patientID:any) {
    this.router.navigate(['vitals', patientID, 'create']);
  }

  ngOnInit() {
    this.authService.listPatients().subscribe(patients => {
      this.patients = patients;
      console.log(this.patients);
    }, 
      error => this.errorMessage = error);
  }

}
