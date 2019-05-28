import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { Parcours } from 'src/app/model/parcours';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { Enseignant } from 'src/app/model/enseignant';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Societe } from 'src/app/model/societe';
import { SocietesService } from 'src/app/service/societes.service';
import { Etudiant } from 'src/app/model/etudiant';
import { Assister } from 'src/app/model/assiter';
import { Sujet } from 'src/app/model/sujet';
import { Enseignantcast } from 'src/app/model/enseignantcast';
import { Sujetcast } from 'src/app/model/sujetcast';
import { NotificationService } from 'src/app/service/notification.service';
@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {


  enseignant: Enseignantcast;
  societe: Societe;
  etudiant: Etudiant;
  encadrant: Assister;
  sujet: Sujetcast;
  spec: Parcours[];
  ens: Enseignant[];
  societes: Societe[];
  filteredSociete: Observable<Societe[]>;
  filteredEnseignant: Observable<Enseignant[]>;
  constructor(public dialogRef: MatDialogRef<ModifierEtudiantComponent>,
              private service: EtudiantService,
              private _Ens: EnseignantService,
              private _Societe: SocietesService,
              private notif: NotificationService) {
               }


  ngOnInit() {
    this.ChargerParcours();
    this.ChargerEnseignants();
    this.ChargerSocietes();
    this.filteredEnseignant = (this.service.sujetForm.controls.encadrant).valueChanges
    .pipe(
      startWith(''),
      map(enseignant => enseignant ? this._filterEnseignants(enseignant) : this.ens.slice())
    );
    this.filteredSociete = (this.service.organisationForm.controls.societe).valueChanges
    .pipe(
      startWith(''),
      map(societe => societe ? this._filterSociete(societe) : this.societes.slice())
    );
  }

  ChargerSocietes() {
    this._Societe.getSocietes().subscribe(async res => {
      this.societes = await res;
    });
  }
  ChargerParcours() {
    this.service.getParcours().subscribe( async res => {
      this.spec = await res ;
    });
  }

  ChargerEnseignants() {
    this._Ens.getEnseignants().subscribe(async res => {
      this.ens = await res;
    });
  }

  CloseDialog() {
    this.dialogRef.close(false);
    this.service.InitialForm();
  }

  getEnseignantNomPrenom(enseignant: Enseignant) {
    return (enseignant.nom + ' ' + enseignant.prenom);
  }
  getNomSociete(societe: Societe) {
    return societe.nom;
  }
  private _filterSociete(value: string): Societe[] {
    const filterValue = value.toLowerCase();

    return this.societes.filter(res => res.nom.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterEnseignants(value: string): Enseignant[] {
    const filterValue = value.toLowerCase();

    return this.ens.filter(res => (res.nom.toLowerCase() + res.prenom.toLowerCase()).indexOf(filterValue) === 0);
  }

  chargerEtudiant() {
    this.etudiant = new Etudiant(
      this.service.infoForm.controls.cin.value,
      this.service.infoForm.controls.nom.value,
      this.service.infoForm.controls.prenom.value,
      this.service.infoForm.controls.email.value,
      this.service.infoForm.controls.tlf.value,
      null,
      this.spec[this.service.infoForm.controls.parcours.value - 1],
      null, null
    );
    console.log(this.etudiant);
  }

  setAssister() {
    this.enseignant = new Enseignantcast(
      (this.service.sujetForm.controls.encadrant.value).id,
      (this.service.sujetForm.controls.encadrant.value).nom,
      (this.service.sujetForm.controls.encadrant.value).prenom,
      (this.service.sujetForm.controls.encadrant.value).tlf,
      (this.service.sujetForm.controls.encadrant.value).email,
      (this.service.sujetForm.controls.encadrant.value).grade,
      (this.service.sujetForm.controls.encadrant.value).password
    );
    this.encadrant = new Assister(this.enseignant, 'Encadrant');
  }

  setSociete() {
    this.societe = new Societe(
      (this.service.organisationForm.controls.societe.value).id,
      (this.service.organisationForm.controls.societe.value).nom,
      (this.service.organisationForm.controls.societe.value).secteur,
      (this.service.organisationForm.controls.societe.value).ville,
      (this.service.organisationForm.controls.societe.value).codePostale,
      (this.service.organisationForm.controls.societe.value).adresse,
      (this.service.organisationForm.controls.societe.value).tlf,
      (this.service.organisationForm.controls.societe.value).email,
      (this.service.organisationForm.controls.societe.value).pays
    );
    console.log(this.societe);
  }
  setSujetSociete() {
    this.sujet = new Sujetcast(
      this.service.sujetForm.controls.id.value,
      this.service.sujetForm.controls.titre.value,
      this.service.sujetForm.controls.resume.value,
      this.service.sujetForm.controls.motCles.value,
      this.service.sujetForm.controls.SessionDepot.value,
      this.service.sujetForm.controls.reussiteEcrit.value,
      this.societe,
      this.service.organisationForm.controls.nomPrenom.value,
      this.service.organisationForm.controls.email.value,
      this.service.organisationForm.controls.tlf.value,
    );
  }
  OnSubmit() {
    this.chargerEtudiant();
    this.setAssister();
    this.setSociete();
    this.setSujetSociete();
    this.etudiant.sujet = this.sujet;
    this.etudiant.assistans = [];
    (this.etudiant.assistans)[0] = this.encadrant;
    this.service.updateEtudiant(this.etudiant.cin, this.etudiant).subscribe(res => {
        this.notif.success('Etudiant est ajouter avec succès');
        this.service.InitialForm();
        this.CloseDialog();
      });



  }


}
