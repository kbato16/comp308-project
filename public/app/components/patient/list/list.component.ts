import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PatientListComponent implements OnInit {

  user: any = {};
  patient: any;
  paramsObserver:any;
  patients:any;
  errorMessage: string;
  private _baseURL = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private _http: Http
    ) { 

      this.user = authService.user;
    }

  add(patientID:any) {
    console.log("Add my patient!");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
    .post('api/signup', this.patient, {headers: headers})
    .map((res: Response) => res.json())
    // .catch(this.handleError);
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
