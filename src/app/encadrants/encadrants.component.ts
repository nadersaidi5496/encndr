import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource , MatDialog , MatDialogConfig} from '@angular/material';
import { EncadrantComponent } from './encadrant/encadrant.component';
import { DialogService } from '../service/dialog.service';
import { NotificationService } from '../service/notification.service';
export interface EncadrantsItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: EncadrantsItem[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
  {id: 11, name: 'Sodium'},
  {id: 12, name: 'Magnesium'},
  {id: 13, name: 'Aluminum'},
  {id: 14, name: 'Silicon'},
  {id: 15, name: 'Phosphorus'},
  {id: 16, name: 'Sulfur'},
  {id: 17, name: 'Chlorine'},
  {id: 18, name: 'Argon'},
  {id: 19, name: 'Potassium'},
  {id: 20, name: 'Calcium'},
];

@Component({
  selector: 'app-encadrants',
  templateUrl: './encadrants.component.html',
  styleUrls: ['./encadrants.component.css']
})
export class EncadrantsComponent implements OnInit {
    constructor(private dialog: MatDialog,
                private dialogService: DialogService,
                private notif: NotificationService) {}
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: MatTableDataSource<any>;
    searchKey: string;
    ajouter = false;
    modifier = false;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [ 'actions', 'id', 'name'];

    ngOnInit() {
      this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    onSearchClear() {
      this.searchKey = '';
      this.applyFilter();
    }
    applyFilter() {
      this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }
    onCreate() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '40%';
      this.dialog.open(EncadrantComponent, dialogConfig);
    }

    onDelete() {
      this.dialogService.openConfirmeDialog("Etes-vous sûr(e) de vouloir supprimer l'encadrant ?")
      .afterClosed().subscribe(res =>{
        if (res) {
          this.notif.success('encadrant supprimer avec succes');
        }
    });
  }
}
