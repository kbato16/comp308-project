import { Component, OnInit } from '@angular/core';
import { Alerts } from './mock-alerts';
import { Alert } from './alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class PatientAlertsComponent implements OnInit {

  alert: any;
  alerts = Alerts;

  constructor() { }

  ngOnInit() {
  }

}
