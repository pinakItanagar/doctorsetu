import { Component, OnInit } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';

@Component({
  selector: 'ngx-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {

  bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };

  constructor() { }

  ngOnInit(): void {
  }

}
