import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EtudiantComponent>,
              private service: EtudiantService) { }

  ngOnInit() {
  }

  CloseDialog() {
    this.dialogRef.close(false);
  }
}
