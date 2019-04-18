import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatConfirmeDeleteComponent } from '../mat-confirme-delete/mat-confirme-delete.component';
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
}
