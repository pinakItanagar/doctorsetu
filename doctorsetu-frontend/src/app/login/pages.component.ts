import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  // template: `
  //   <ngx-one-column-layout>
  //     <nb-menu [items]="menu"></nb-menu>
  //     <router-outlet></router-outlet>
  //   </ngx-one-column-layout>
  // `,
  template: `
      <router-outlet></router-outlet>
    
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
