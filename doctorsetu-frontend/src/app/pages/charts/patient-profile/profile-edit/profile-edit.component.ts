import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  options = [
    { value: 'This is value 1', label: 'Male' },
    { value: 'This is value 2', label: 'Female' },
    { value: 'This is value 3', label: 'Other' },
  ];
  option;

  constructor() { }

  ngOnInit(): void {
  }

}
