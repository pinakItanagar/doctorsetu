import { Component } from '@angular/core';

@Component({
  selector: 'ngx-two-columns-layout',
  styleUrls: ['./two-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu" class="bg-dark text-white"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="large" style="padding: 0px !important; margin:0; background-color: #FFF;">
      </nb-layout-column>

      <nb-layout-column style="padding: 0px !important;">
        <ng-content select="router-outlet" style="padding: 0px !important; margin:0;"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
})
export class TwoColumnsLayoutComponent {}
