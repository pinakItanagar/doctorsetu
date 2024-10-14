
import { SpecilizationComponent } from './specilization/specilization.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../angular-material.module';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { LanguageSpeakComponent } from './language-speak/language-speak.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalComponent } from './specilization/modal/modal.component';
import { EditPopupComponent } from './language-speak/edit-popup/edit-popup.component';
import { DeletePopupComponent } from './language-speak/delete-popup/delete-popup.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { VerifiCheckListComponent } from './verifi-check-list/verifi-check-list.component';
import { UsersComponent } from './users/users.component';
import { AccessControlComponent } from './access-control/access-control.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbSelectModule,
    FormsModule,
    AngularMaterialModule,
    MatToolbarModule,
    FormsModule
  ],
  declarations: [
    ...routedComponents,
    ContactListComponent,
    SpecilizationComponent,
    LanguageSpeakComponent,
    ModalComponent,
    EditPopupComponent,
    DeletePopupComponent,
    PaymentSettingsComponent,
    VerifiCheckListComponent,
    UsersComponent,
    AccessControlComponent,
  ],
})
export class TablesModule { }
