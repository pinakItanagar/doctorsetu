import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ngx-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateModalComponent>) { }

  ngOnInit(): void {
  }

  actionFunction() {
    alert("I am a work in progress");
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
