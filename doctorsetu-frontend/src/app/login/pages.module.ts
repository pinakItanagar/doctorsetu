import { NgModule } from '@angular/core';
import { NbMenuModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
//import { TablesModule } from './tables/tables.module';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
   // TablesModule,
    FormsModule,
    Ng2SmartTableModule,
    NbSelectModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
