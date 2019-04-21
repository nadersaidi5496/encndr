import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatConfirmeDeleteComponent } from '../mat-confirme-delete/mat-confirme-delete.component';
import { EnseignantComponent } from '../enseignants/enseignant/enseignant.component';
import { EnseignantService } from './enseignant.service';
import * as _ from 'lodash';
import { EtudiantComponent } from '../etudiants/etudiant/etudiant.component';
import { ListEtudComponent } from '../enseignants/list-etud/list-etud.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog,
              private service: EnseignantService) { }

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
    return this.dialog.open(EnseignantComponent, dialogConfig);
  }

  ModifierTeacher(row) {
    this.service.myForm.setValue(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    return this.dialog.open(EnseignantComponent, dialogConfig);

  }

  ajouterEtudiantDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.panelClass = 'confirm-dialog-container';
    this.dialog.open(EtudiantComponent, dialogConfig);
  }

  ListEtudDialog(row) {
    this.service.myForm.setValue(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.panelClass = 'confirm-dialog-container';
    this.dialog.open(ListEtudComponent, dialogConfig);
  }


}
