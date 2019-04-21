import { Component, OnInit, ViewChild } from '@angular/core';
import { Enseignant } from 'src/app/model/enseignant';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef } from '@angular/material';
import { EnseignantService } from 'src/app/service/enseignant.service';
export interface EtudiantData {
  Id: number;
  fullName: string ;
  CIN: string ;
  Email: string;
  Tlf: number;
  Sujet: string;
  TypeMaster: string;
}

const EXAMPLE_DATA: EtudiantData[] = [
  {Id: 1, fullName: 'Saidi Nader', CIN: '07985332' , Tlf: 22959782, Email: 'nadersaidi@gmail.com', Sujet: "analyse des données d'encadrement" , TypeMaster: 'Recherche'},
  {Id: 2, fullName: 'Saidi Nader', CIN: '07985332' , Tlf: 22959782, Email: 'nadersaidi@gmail.com', Sujet: "analyse des données d'encadrement" , TypeMaster: 'Professionnel'},
  {Id: 3, fullName: 'Saidi Nader', CIN: '07985332' , Tlf: 22959782, Email: 'nadersaidi@gmail.com', Sujet: "analyse des données d'encadrement" , TypeMaster: 'Recherche'},
  {Id: 4, fullName: 'Saidi Nader', CIN: '07985332' , Tlf: 22959782, Email: 'nadersaidi@gmail.com', Sujet: "analyse des données d'encadrement" , TypeMaster: 'Professionnel'},
  {Id: 5, fullName: 'Saidi Nader', CIN: '07985332' , Tlf: 22959782, Email: 'nadersaidi@gmail.com', Sujet: "analyse des données d'encadrement" , TypeMaster: 'Recherche'}
];
@Component({
  selector: 'app-list-etud',
  templateUrl: './list-etud.component.html',
  styleUrls: ['./list-etud.component.css']
})
export class ListEtudComponent implements OnInit {
  searchKey: string;

  displayedColumns = [ 'fullName', 'CIN' , 'Email' , 'Tlf' , 'Sujet'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  constructor(private service: EnseignantService,
              public dialogRef: MatDialogRef<ListEtudComponent>) { }

  ngOnInit() {
  this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  }

  CloseDialog() {
    this.service.InitialForm();
    this.dialogRef.close(false);
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
    }
    applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }

}
