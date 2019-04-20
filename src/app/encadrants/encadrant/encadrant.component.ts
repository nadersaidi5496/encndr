import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.css']
})
export class EncadrantComponent implements OnInit {

  myForm: FormGroup;
  grades = ["Professeur de l'enseignement supérieur", 'Maître de conférences', 'Maître assistant', 'Assistant'];
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<EncadrantComponent>) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      Id : [''],
      Nom : ['', Validators.required],
      Prenom : ['', Validators.required],
      Tlf : [null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
      ]],
      Email : ['', [
        Validators.required,
        Validators.email
      ]],
      Grade : ['', Validators.required]
    });
  }

  //getters and setters for form
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

  //fermeture de popup avec retour "false"
  CloseDialog() {
    this.dialogRef.close(false);
  }
}
