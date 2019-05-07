import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { SoutenanceComponent } from './soutenance/soutenance.component';
import { SocietesComponent } from './societes/societes.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent ,
  children : [
    {path: 'etudiants' , component : EtudiantsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path : 'enseignants', component: EnseignantsComponent},
    {path: 'soutenances' , component : SoutenanceComponent},
    {path: 'societes', component: SocietesComponent}
  ]},
  {path : '', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
