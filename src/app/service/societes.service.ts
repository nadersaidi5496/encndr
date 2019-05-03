import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SocietesService {
  myForm: FormGroup = new FormGroup({
    Id: new FormControl(null),
    Nom : new FormControl('', Validators.required),
    Secteur : new FormControl('', Validators.required),
    Ville : new FormControl('', Validators.required),
    CodePostale : new FormControl('', Validators.required),
    Adresse: new FormControl('', Validators.required),
    Tlf : new FormControl(null, [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8)
    ]),
    Email : new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });
  constructor() { }

    // getters and setters for form
    get Id() {
      return this.myForm.get('Id');
    }
    get Nom() {
      return this.myForm.get('Nom');
    }
    get Secteur() {
      return this.myForm.get('Secteur');
    }
    get Tlf() {
      return this.myForm.get('Tlf');
    }
    get Email() {
      return this.myForm.get('Email');
    }
    get Ville() {
      return this.myForm.get('Ville');
    }
    get Adresse() {
      return this.myForm.get('Adresse');
    }
    get CodePostale() {
      return this.myForm.get('CodePostale');
    }
  InitialForm() {
    this.myForm.reset();
  }

}
