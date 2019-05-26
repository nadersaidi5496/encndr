import { Component, OnInit, ViewChild } from '@angular/core';
import { Enseignant } from 'src/app/model/enseignant';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef } from '@angular/material';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-list-etud',
  templateUrl: './list-etud.component.html',
  styleUrls: ['./list-etud.component.css']
})
export class ListEtudComponent implements OnInit {
  searchKey = '';
  List: any[] = [];
  displayedColumns = [ 'fullName', 'CIN' , 'Email' , 'Tlf' , 'Sujet', 'Position'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  constructor(private service: EnseignantService,
              public dialogRef: MatDialogRef<ListEtudComponent>) { }

  ngOnInit() {
  this.service.myForm.controls['assisters'].value.forEach(element => {
      this.List.push(element);
  });
  this.dataSource = new MatTableDataSource(this.List);
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  }

  CloseDialog() {
    this.service.InitialForm();
    this.dialogRef.close(false);
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter('');
    }
    applyFilter(mot) {
      if (!(this.searchKey === '')) {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
      } else {
        this.dataSource.filter = mot.toLowerCase();

      }
    }

}
