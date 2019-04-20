import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EtudiantComponent } from '../etudiants/etudiant/etudiant.component';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private dialog: MatDialog) { }

  ajouterEtudiantDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.panelClass = 'confirm-dialog-container';
    this.dialog.open(EtudiantComponent, dialogConfig);
  }
}
