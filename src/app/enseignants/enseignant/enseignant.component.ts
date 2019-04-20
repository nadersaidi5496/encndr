import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  myForm: FormGroup;
  grades = [
    {id: 1, nom: "Professeur de l'enseignement supérieur"},
    {id: 2, nom: 'Maître de conférences'},
    {id: 3, nom: 'Maître assistant'},
    {id: 4, nom: 'Assistant'}
    ];
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<EnseignantComponent>,
              private notif: NotificationService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      $key: [''],
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

  // fermeture de popup avec retour "false"
  CloseDialog() {
    this.dialogRef.close(false);
  }

  OnSubmit() {
    console.log(this.myForm.value);
    this.notif.success('Enseignant est ajouté avec succès');
    this.myForm.reset();
  }
}
