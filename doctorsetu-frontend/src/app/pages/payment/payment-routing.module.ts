import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { PaymentComponent } from './payment.component';


const routes: Routes = [{
  path: '',
  component: PaymentComponent,
  children: [
    {
      path: 'payment-option', 
      component: PaymentOptionComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
