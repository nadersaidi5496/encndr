import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatPaginatorModule, MatSortModule, MatInputModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatTableModule } from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EtudiantComponent } from './etudiants/etudiant/etudiant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatConfirmeDeleteComponent } from './mat-confirme-delete/mat-confirme-delete.component';
import { EncadrantsComponent } from './encadrants/encadrants.component';
import { EncadrantComponent } from './encadrants/encadrant/encadrant.component';
import {MatSelectModule} from '@angular/material';
import { SocietesComponent } from './societes/societes.component';
import { SocieteComponent } from './societes/societe/societe.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    MainNavComponent,
    EtudiantComponent,
    DashboardComponent,
    MatConfirmeDeleteComponent,
    EncadrantsComponent,
    EncadrantComponent,
    SocietesComponent,
    SocieteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EtudiantComponent, MatConfirmeDeleteComponent , EncadrantComponent]
})
export class AppModule { }
