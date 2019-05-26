import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DialogService } from '../service/dialog.service';
import { NotificationService } from '../service/notification.service';
import { Enseignant } from '../model/enseignant';
import { EnseignantService } from '../service/enseignant.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
dataSource: MatTableDataSource<Enseignant> = new MatTableDataSource();

searchKey: string;
ajouter = false;
modifier = false;
DATA: Enseignant[];
  constructor(private dialogService: DialogService,
              private notif: NotificationService,
              private service: EnseignantService) {}


/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
displayedColumns = [ 'actions', 'Nom' , 'Prenom' , 'Tlf', 'Email', 'Grade'];

ngOnInit() {
  this.chargeData();
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}
public chargeData(){
  this.service.getEnseignants()
  .subscribe(res => {
    this.DATA = res;
    this.dataSource = new MatTableDataSource<Enseignant>(this.DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  },
  err => console.error(err)
  );
}

onSearchClear() {
this.searchKey = '';
this.applyFilter();
}
applyFilter() {
this.dataSource.filter = this.searchKey.trim().toLowerCase();
}

onCreate() {
this.dialogService.AddTeacherDialog().afterClosed().subscribe(res =>{
  this.chargeData();
});
}

// operation de suppression d'un element du tableau
onDelete(row) {
  this.dialogService.openConfirmeDialog("Etes-vous sûr(e) de vouloir supprimer l'encadrant ?")
  .afterClosed().subscribe(res => {
    if (res) {
      this.service.deleteEnseignant(row.id).subscribe(res=>{
        this.notif.warn('encadrant supprimer avec succes');
        this.chargeData();
      });
    }
  });
}

// operation de modification
onEdit(row) {
  this.dialogService.ModifierTeacher(row).afterClosed().subscribe(res =>{
    this.chargeData();
  });
}

encadEtudiant(row) {
  console.log(row);
  this.dialogService.ListEtudDialog(row);
}

}
