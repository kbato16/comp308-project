import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { VitalsService } from '../../../services/vitals.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.scss']
})
export class DiagnoseComponent implements OnInit {
  vitals: any = {};
  diagnosis: string;
  errorMessage: string;
  paramsObserver: any;
  patientId: string;
  constructor(private vitalService: VitalsService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.paramsObserver = this.route.parent.params.subscribe(params => {
      this.patientId = params['patientId'];
      this.vitals.BodyHeight = '';
      this.vitals.BodyWeight = '';
      this.vitals.BodyMassIndex = '';
      this.vitals.SystolicBloodPressure = '';
      this.vitals.DiastolicBloodPressure = '';
      this.vitals.OralTemperature = '';
      this.vitals.QualityAdjustedLifeYear = '';
      this.vitals.DisabilityRatingScale = '';
      this.vitals.NonSmallCellLungCancer = '';
      this.vitals.HemoglobinA1c = '';
      this.vitals.Glucose = '';
      this.vitals.UreaNitrogen = '';
      this.vitals.Creatinine = '';
      this.vitals.Calcium = '';
      this.vitals.Sodium = '';
      this.vitals.Potassium = '';
      this.vitals.Chloride = '';
      this.vitals.CarbonDioxide = '';
      this.vitals.TotalCholesterol = '';
      this.vitals.Triglycerides = '';
      this.vitals.LowDensityLipoproteinCholesterol = '';
      this.vitals.HighDensityLipoproteinCholesterol = '';
      this.vitals.MicroalbuminCreatinineRatio = '';
      this.vitals.EstimatedGlomerularFiltrationRate = '';
      this.vitals.DXABonedensity = '';
    });
  }
  resetDiagnosis() {
    this.diagnosis = null;
    this.router.navigate([`/vitals/${this.patientId}/diagnose`]);
  }
  diagnose() {
    this.vitalService.diagnose(this.vitals).subscribe(result => {
      if (result) {
        this.diagnosis = String(Object.keys(result));
        this.router.navigate([`/vitals/${this.patientId}/diagnose`]);
      }
    });
  }
}
