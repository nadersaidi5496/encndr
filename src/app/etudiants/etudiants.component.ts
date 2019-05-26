import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource , MatDialog , MatDialogConfig} from '@angular/material';
import { DialogService } from '../service/dialog.service';
import { NotificationService } from '../service/notification.service';
import { EtudiantService } from '../service/etudiant.service';
import { Etudiant } from '../model/etudiant';
@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  DATA: any[];
  constructor(private dialogService: DialogService,
              private notif: NotificationService,
              private service: EtudiantService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  searchKey: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
// tslint:disable-next-line: max-line-length
displayedColumns = ['actions', 'CIN' , 'Nom', 'Prenom', 'Email',  'Tlf' , 'parcours'];

  ngOnInit() {
    console.log(this.DATA);
    this.chargeData();
  }

  public chargeData(){
    this.service.getEtudiants()
    .subscribe(res => {
      this.DATA = res;
      this.dataSource = new MatTableDataSource(this.DATA);
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
    this.dialogService.ajouterEtudiantDialog().afterClosed().subscribe(res => {
      this.chargeData();
    });
  }

  onDelete(row: Etudiant) {
    this.dialogService.openConfirmeDialog('Etes-vous sûr(e) de vouloir supprimer l\'etudiant ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.service.deleteEtudiant(row.cin).subscribe(res =>{
          this.notif.success('etudiant supprimer avec succes');
          this.chargeData();
        });
      }
    });
  }
}


