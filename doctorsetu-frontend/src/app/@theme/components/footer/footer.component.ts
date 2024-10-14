import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    Source: DoctorSetu App. © Copyright 2020. <a href="">Preksh</a> and <a href="">Techinfy</a>.
    </span>
  `,
})
export class FooterComponent {
}
