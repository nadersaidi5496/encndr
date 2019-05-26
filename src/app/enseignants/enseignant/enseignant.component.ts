import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/service/notification.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { Enseignant } from 'src/app/model/enseignant';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  // myForm: FormGroup;
  enseignant: Enseignant;
  grades = [
    {id: 1, nom: "Professeur de l'enseignement supérieur"},
    {id: 2, nom: 'Maître de conférences'},
    {id: 3, nom: 'Maître assistant'},
    {id: 4, nom: 'Assistant'}
    ];
  constructor(public dialogRef: MatDialogRef<EnseignantComponent>,
              private notif: NotificationService,
              private service: EnseignantService) { }

  ngOnInit() {
  }



  // fermeture de popup avec retour "false"
  CloseDialog() {
    this.service.InitialForm();
    this.dialogRef.close(false);
  }



  OnSubmit() {
    this.enseignant = new Enseignant(
      this.service.myForm.controls['id'].value,
      this.service.myForm.controls['nom'].value,
      this.service.myForm.controls['prenom'].value,
      this.service.myForm.controls['tlf'].value,
      this.service.myForm.controls['email'].value,
      this.service.myForm.controls['grade'].value,
      this.service.myForm.controls['password'].value
    );    
    if (!this.service.myForm.controls['id'].value) {
      this.service.addEnseignant(this.enseignant).subscribe(result =>{
        this.notif.success('Enseignant est ajouter avec succès');
        this.service.InitialForm();
        this.CloseDialog();
      });
    } else {
      this.service.updateEnseignant(this.enseignant.id, this.enseignant).
      subscribe(res => {
        this.notif.success('Enseignant est modifier avec succès');
        this.service.InitialForm();
        this.CloseDialog();
      });
    }
  }

}
