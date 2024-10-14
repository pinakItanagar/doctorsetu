import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ngx-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePopupComponent>) { }

  ngOnInit() { }

  actionFunction() {
    alert("I am a work in progress");
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
