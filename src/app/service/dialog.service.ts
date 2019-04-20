import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatConfirmeDeleteComponent } from '../mat-confirme-delete/mat-confirme-delete.component';
import { EncadrantComponent } from '../encadrants/encadrant/encadrant.component';
import { EtudiantComponent } from '../etudiants/etudiant/etudiant.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmeDialog(msg) {
    return this.dialog.open(MatConfirmeDeleteComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px' },
      data: {
        message: msg
      }
    });
  }

  AddTeacherDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    return this.dialog.open(EncadrantComponent, dialogConfig);
  }

  ajouterEtudiantDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.panelClass = 'confirm-dialog-container';
    this.dialog.open(EtudiantComponent, dialogConfig);
  }
}
