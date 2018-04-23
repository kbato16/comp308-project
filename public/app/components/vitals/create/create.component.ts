import { Component, OnInit } from '@angular/core';
import { VitalsService } from '../../../services/vitals.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class VitalsCreateComponent implements OnInit {

  constructor(private vitalService: VitalsService) { }

//   create() {
//     this.vitalService.signup(this.user)
//         .subscribe(result => this._router.navigate(['/']),
//         error => this.errorMessage = error);
// }

  ngOnInit() {
  }

}
