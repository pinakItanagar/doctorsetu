import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { StepperComponent } from './stepper/stepper.component';
import { Path } from 'leaflet';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'stepper', 
      component: StepperComponent,
    },
    {
      path: 'doctors',
      component: DoctorsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
