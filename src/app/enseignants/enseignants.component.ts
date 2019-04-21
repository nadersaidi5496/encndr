import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DialogService } from '../service/dialog.service';
import { NotificationService } from '../service/notification.service';
import { EnseignantService } from '../service/enseignant.service';
import { Encadrant } from '../model/encadrant';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Encadrant[] = [
  {Id: 1, Nom: 'Saidi', Prenom: 'nader', Tlf: 22959782, Email: 'nadersaidi@gmail.com', Grade: 1},
  {Id: 2, Nom: 'Saidi', Prenom: 'nader', Tlf: 22959782, Email: 'nadersaidi@gmail.com', Grade: 2},
  {Id: 3, Nom: 'Saidi', Prenom: 'nader', Tlf: 22959782, Email: 'nadersaidi@gmail.com', Grade: 3},
  {Id: 4, Nom: 'Saidi', Prenom: 'nader', Tlf: 22959782, Email: 'nadersaidi@gmail.com', Grade: 2},
  {Id: 5, Nom: 'Saidi', Prenom: 'nader', Tlf: 22959782, Email: 'nadersaidi@gmail.com', Grade: 4}
];

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  constructor(private dialogService: DialogService,
              private notif: NotificationService) {}
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
dataSource: MatTableDataSource<any>;
searchKey: string;
ajouter = false;
modifier = false;
grades = [
  {id: 1, nom: "Professeur de l'enseignement supérieur"},
  {id: 2, nom: 'Maître de conférences'},
  {id: 3, nom: 'Maître assistant'},
  {id: 4, nom: 'Assistant'}
  ];

/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
displayedColumns = [ 'actions', 'Nom' , 'Prenom' , 'Tlf', 'Email', 'Grade'];

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
this.dialogService.AddTeacherDialog();
}

// operation de suppression d'un element du tableau
onDelete() {
  this.dialogService.openConfirmeDialog("Etes-vous sûr(e) de vouloir supprimer l'encadrant ?")
  .afterClosed().subscribe(res => {
    if (res) {
      this.notif.success('encadrant supprimer avec succes');
    }
  });
}

// operation de modification
onEdit(row) {
  this.dialogService.ModifierTeacher(row);
}
}
