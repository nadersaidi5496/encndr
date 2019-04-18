import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mat-confirme-delete',
  templateUrl: './mat-confirme-delete.component.html',
  styleUrls: ['./mat-confirme-delete.component.css']
})
export class MatConfirmeDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<MatConfirmeDeleteComponent>) { }

  ngOnInit() {
  }

  CloseDialog() {
    this.dialogRef.close(false);
  }
}
