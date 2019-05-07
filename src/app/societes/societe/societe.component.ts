import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/service/notification.service';
import { SocietesService } from 'src/app/service/societes.service';
import { Societe } from 'src/app/model/societe';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {


  societe: Societe;
  grades = [
    {id: 1, nom: "Professeur de l'enseignement supérieur"},
    {id: 2, nom: 'Maître de conférences'},
    {id: 3, nom: 'Maître assistant'},
    {id: 4, nom: 'Assistant'}
    ];
  constructor(public dialogRef: MatDialogRef<SocieteComponent>,
              private notif: NotificationService,
              private service: SocietesService) { }

  ngOnInit() {
  }



  // fermeture de popup avec retour "false"
  CloseDialog() {
    this.service.InitialForm();
    this.dialogRef.close(false);
  }



  OnSubmit() {
    this.societe = new Enseignant(
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
