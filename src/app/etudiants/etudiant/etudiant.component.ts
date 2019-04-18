import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EtudiantComponent>) { }

  ngOnInit() {
  }

  CloseDialog() {
    this.dialogRef.close(false);
  }
}
