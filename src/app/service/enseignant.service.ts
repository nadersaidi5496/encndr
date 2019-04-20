import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EnseignantComponent } from '../enseignants/enseignant/enseignant.component';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private dialog: MatDialog) { }

  AddTeacherDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    return this.dialog.open(EnseignantComponent, dialogConfig);
  }
}
