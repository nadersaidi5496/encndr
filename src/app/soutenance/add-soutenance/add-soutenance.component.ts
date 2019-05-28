import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { Etudiant } from 'src/app/model/etudiant';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { MatDialogRef } from '@angular/material';
import { Enseignant } from 'src/app/model/enseignant';
import { formatDate } from '@angular/common';
import { Enseignantcast } from 'src/app/model/enseignantcast';
import { Assister } from 'src/app/model/assiter';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-add-soutenance',
  templateUrl: './add-soutenance.component.html',
  styleUrls: ['./add-soutenance.component.css']
})
export class AddSoutenanceComponent implements OnInit {

  minDate: Date = new Date();
  rapporteur: Enseignantcast;
  President: Enseignantcast;
  rapporteurr: Assister;
  Presidentt: Assister;
  encadrant: Assister;
  etudiant: any;
  enss: any[];
  etds: any[];
  constructor(private _ens: EnseignantService,
              private _etd: EtudiantService,
              public dialogRef: MatDialogRef<AddSoutenanceComponent>,
              private notif: NotificationService) { }

  ngOnInit() {
    this.ChargerEtd();
    this.ChargerEns();
  }

  ChargerEtd(){
    this._etd.getEtudiants().subscribe(res =>{
      this.etds = res;
    });
  }

  ChargerEns() {
    this._ens.getEnseignants().subscribe(res =>{
      this.enss = res;
    });
  }

  CloseDialog() {
    this.dialogRef.close(false);
    this._etd.SoutenanceForm.reset();
  }

  getEtudiantinfo(row: Etudiant) {
    return (row.nom + ' ' +row.prenom);
  }

  getEnseignantNomPrenom(enseignant: Enseignant) {
    return (enseignant.nom + ' ' + enseignant.prenom);
  }

  setRapporteur() {
    this.rapporteur = new Enseignantcast(
      (this._etd.SoutenanceForm.controls['rapporteur'].value).id,
      (this._etd.SoutenanceForm.controls['rapporteur'].value).nom,
      (this._etd.SoutenanceForm.controls['rapporteur'].value).prenom,
      (this._etd.SoutenanceForm.controls['rapporteur'].value).tlf,
      (this._etd.SoutenanceForm.controls['rapporteur'].value).email,
      (this._etd.SoutenanceForm.controls['rapporteur'].value).grade,
      (this._etd.SoutenanceForm.controls['rapporteur'].value).password
    );
    this.President = new Enseignantcast(
      (this._etd.SoutenanceForm.controls['PresidentDuJury'].value).id,
      (this._etd.SoutenanceForm.controls['PresidentDuJury'].value).nom,
      (this._etd.SoutenanceForm.controls['PresidentDuJury'].value).prenom,
      (this._etd.SoutenanceForm.controls['PresidentDuJury'].value).tlf,
      (this._etd.SoutenanceForm.controls['PresidentDuJury'].value).email,
      (this._etd.SoutenanceForm.controls['PresidentDuJury'].value).grade,
      (this._etd.SoutenanceForm.controls['PresidentDuJury'].value).password
    );
    this.rapporteurr = new Assister(this.rapporteur, 'Rapporteur');
    this.Presidentt = new Assister(this.President, 'PresidentDuJury');
  }

  OnSubmit() {

    this.setRapporteur();
    this.etudiant = this._etd.SoutenanceForm.controls['etudiant'].value;
    this.etudiant.dateSoutenance = this._etd.SoutenanceForm.controls['dateSoutenance'].value;
    this.etudiant.assistans = [];
    ((this.etudiant).assistans)[0] = this.rapporteurr;
    ((this.etudiant).assistans)[1] = this.Presidentt;
    console.log(this.etudiant);
    this._etd.updateEtudiant(this.etudiant.cin, this.etudiant).subscribe(res =>{
      this.notif.success('soutenance est ajouter avec succès');
      this._etd.SoutenanceForm.reset();
      this.CloseDialog();
    });
    // console.log(((this._etd.SoutenanceForm.controls['etudiant'].value).assistans)[0]);
    // console.log(formatDate(this._etd.SoutenanceForm.controls['dateSoutenance'].value, 'dd/MM/yyyy', 'en'));
    // // console.log(new Date();
  }

}
