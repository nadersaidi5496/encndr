import { Injectable } from '@angular/core';
import { EtudiantComponent } from '../etudiants/etudiant/etudiant.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  infoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
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
      Validators.pattern('[0-9]*')])
  });

  constructor(private httpClient: HttpClient) { }

  
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
  InitialForm() {
    this.infoForm.reset();
  }


}
