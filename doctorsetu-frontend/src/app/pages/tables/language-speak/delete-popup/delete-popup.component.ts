import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from './../../../../api/doctor.service';

@Component({
  selector: 'ngx-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  constructor(private doctorService: DoctorService,public dialogRef: MatDialogRef<DeletePopupComponent>) { }

  ngOnInit(): void {
    console.log(this)
  }
  actionFunction() {
    // alert("I am a work in progress");
    // this.doctorService.removeLanguage(name).subscribe((res) => {
      this.closeModal();

    // })
  }

  closeModal() {
    this.dialogRef.close();
  }

}
