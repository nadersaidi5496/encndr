import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EnseignantComponent } from '../enseignants/enseignant/enseignant.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  myForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Nom : new FormControl('', Validators.required),
    Prenom : new FormControl('', Validators.required),
    Tlf : new FormControl(null, [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8)
    ]),
    Email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    Grade : new FormControl('', Validators.required)
  });

  constructor(private dialog: MatDialog,
              private fb: FormBuilder) { }

    // getters and setters for form
    get Id() {
      return this.myForm.get('Id');
    }
    get Nom() {
      return this.myForm.get('Nom');
    }
    get Prenom() {
      return this.myForm.get('Prenom');
    }
    get Tlf() {
      return this.myForm.get('Tlf');
    }
    get Email() {
      return this.myForm.get('Email');
    }
    get Grade() {
      return this.myForm.get('Grade');
    }
  InitialForm() {
    this.myForm.reset();
  }
}
