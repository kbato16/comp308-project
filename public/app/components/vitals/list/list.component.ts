import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VitalsService } from '../../../services/vitals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class VitalsListComponent implements OnInit {
  // member variables
  vitalsList: any;
  paramsObserver: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private vitalService: VitalsService) { 

  }

  ngOnInit() {
  //  this.route.parent.params.subscribe(params => console.log(params));
    this.paramsObserver = this.route.parent.params.subscribe(params => {
      let patientId = params['patientId'];
      this.vitalService
          .list(patientId)
          .subscribe(
            vitalsList => {
                this.vitalsList = vitalsList
              },
            error => {
              //this.router.navigate(['/users'])
          }
          ); // subscribe()
  });
  }
}
