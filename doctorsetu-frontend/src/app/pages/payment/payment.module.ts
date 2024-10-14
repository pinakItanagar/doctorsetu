import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { AngularMaterialModule } from '../../angular-material.module';


@NgModule({
  declarations: [PaymentComponent, PaymentOptionComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    AngularMaterialModule,
  ]
})
export class PaymentModule { }
