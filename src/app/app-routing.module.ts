import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EncadrantsComponent } from './encadrants/encadrants.component';

const routes: Routes = [
  {path: 'etudiants' , component : EtudiantsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path : 'encadrants', component: EncadrantsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
