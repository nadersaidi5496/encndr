import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Societe } from '../model/societe';
import { DialogService } from '../service/dialog.service';
import { NotificationService } from '../service/notification.service';
import { SocietesService } from '../service/societes.service';

@Component({
  selector: 'app-societes',
  templateUrl: './societes.component.html',
  styleUrls: ['./societes.component.css']
})
export class SocietesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
dataSource: MatTableDataSource<Societe>;

searchKey: string;
ajouter = false;
modifier = false;
DATA: Societe[];
  constructor(private dialogService: DialogService,
              private notif: NotificationService,
              private service: SocietesService) {}


/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
displayedColumns = [ 'actions', 'Nom' , 'Secteur' , 'Adresse', 'CodePostale', 'Ville', 'Tlf', 'Email', 'Pays'];

ngOnInit() {
  this.chargeData();
}

public chargeData(){
   this.service.getSocietes()
  .subscribe( res => {
    this.DATA = res;
    this.dataSource = new MatTableDataSource<Societe>(this.DATA);
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
this.dialogService.AddSocieteDialog().afterClosed().subscribe(res =>{
  this.chargeData();
});

}

// operation de suppression d'un element du tableau
onDelete(row) {
  this.dialogService.openConfirmeDialog("Etes-vous sûr(e) de vouloir supprimer la Société ?")
  .afterClosed().subscribe(res => {
    if (res) {
      this.service.deleteSociete(row.id).subscribe(res=>{
        this.notif.warn('Socitété supprimer avec succes');
        this.chargeData();
      });
    }
  });
}

// operation de modification
onEdit(row) {
  this.dialogService.ModifierSociete(row).afterClosed().subscribe(res =>{
    this.chargeData();
  });
}

}
