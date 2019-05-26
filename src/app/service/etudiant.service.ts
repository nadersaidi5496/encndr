import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Parcours } from '../model/parcours';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private httpClient: HttpClient,
              private _formBuilder: FormBuilder  ) { }


              infoForm: FormGroup = this._formBuilder.group({
                nom : new FormControl('', Validators.required),
                prenom : new FormControl('', Validators.required),
                tlf : new FormControl('', [
                  Validators.required,
                  Validators.maxLength(8),
                  Validators.minLength(8),
                  Validators.pattern('[1-9]+[0-9]*')
                ]),
                email : new FormControl('', [
                  Validators.required,
                  Validators.email
                ]),
                cin : new FormControl('', [
                  Validators.required,
                  Validators.maxLength(8),
                  Validators.minLength(8),
                  Validators.pattern('[0-9]*')]),
                parcours: new FormControl(null, Validators.required)
              });

              sujetForm: FormGroup = this._formBuilder.group({
                titre: new FormControl('' , Validators.required),
                resume: new FormControl(''),
                motCles: new FormControl(''),
                reussiteEcrit: new FormControl('', Validators.required),
                SessionDepot: new FormControl('', Validators.required)
               , encadrant: new FormControl(null, Validators.required)
              });

              organisationForm: FormGroup = this._formBuilder.group({
                societe: new FormControl(null , Validators.required),
                nomPrenom: new FormControl(''),
                email: new FormControl('' , Validators.email),
                tlf : new FormControl('', [
                  Validators.maxLength(8),
                  Validators.minLength(8),
                  Validators.pattern('[1-9]+[0-9]*')
                ])
              });
              apiUrl = 'http://localhost:8080/';

    // getters and setters for form
    get Id() {
      return this.infoForm.get('id');
    }
    get Nom() {
      return this.infoForm.get('nom');
    }
    get Prenom() {
      return this.infoForm.get('prenom');
    }
    get CIN() {
      return this.infoForm.get('cin');
    }
    get Tlf() {
      return this.infoForm.get('tlf');
    }
    get Email() {
      return this.infoForm.get('email');
    }
    get Parcours() {
      return this.infoForm.get('parcours');
        }

      
  InitialForm() {
    this.infoForm.reset();
    this.sujetForm.reset();
    this.organisationForm.reset();
  }

  public getParcours(): Observable<Parcours[]> {
    return this.httpClient.get<Parcours[]>(this.apiUrl + 'parcours');
  }

  public getParcoursById(id: number): Observable<Parcours> {
    return this.httpClient.get<Parcours>(this.apiUrl + 'parcours/' + id);
  }

  public getEtudiants(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl + 'etudiants');
  }

  public addEtudiant(etd: Etudiant) {
    return this.httpClient.post(this.apiUrl + 'etudiants', etd);
  }

  public deleteEtudiant(id: string) {
    return this.httpClient.delete(this.apiUrl + 'etudiants/' + id);
  }

  public updateEtudiant(id: string, etd: Etudiant) {
    return this.httpClient.put(this.apiUrl + 'etudiants/' + id, etd);
  }


}
