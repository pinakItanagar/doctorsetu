import { LanguageSpeakComponent } from './language-speak/language-speak.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SpecilizationComponent } from './specilization/specilization.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { VerifiCheckListComponent } from './verifi-check-list/verifi-check-list.component';
import { UsersComponent } from './users/users.component';
import { AccessControlComponent } from './access-control/access-control.component';


const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'access-control',
      component: AccessControlComponent,
    },
    {
      path: 'contact-list',
      component: ContactListComponent ,
    },
    {
      path: 'specilization',
      component: SpecilizationComponent,
    },
    {
      path: 'language-speak',
      component: LanguageSpeakComponent,
    },
    {
      path: 'payment-settings',
      component: PaymentSettingsComponent,
    },
    {
      path: 'verifi-check-list',
      component: VerifiCheckListComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ContactListComponent,
  SpecilizationComponent,
  LanguageSpeakComponent,
];
