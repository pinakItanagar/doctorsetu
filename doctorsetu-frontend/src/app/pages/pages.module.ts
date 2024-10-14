import { NgModule } from '@angular/core';
import { NbMenuModule, NbSelectModule, NbPopoverModule, NbTabsetModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TablesModule } from './tables/tables.module';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientsComponent } from './patients/patients.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import {  MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    TablesModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbPopoverModule,
    MatButtonModule,
    MatDialogModule,
    NbTabsetModule,
  ],
  declarations: [
    PagesComponent,
    ModalComponent,
    PatientsComponent,
  ],
  providers: [
    { provide: MatFormFieldModule, useValue: { appearance: 'fill' } },
  ]
})
export class PagesModule {
}
