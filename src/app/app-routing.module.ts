import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';

const routes: Routes = [
  {path: 'etudiants' , component : EtudiantsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path : 'enseignants', component: EnseignantsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
