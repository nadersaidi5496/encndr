import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/service/notification.service';
import { SocietesService } from 'src/app/service/societes.service';
import { Societe } from 'src/app/model/societe';
import { PaysService } from 'src/app/service/pays.service';
import { Pays } from 'src/app/model/pays';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {


  societe: Societe;
  Pays: Pays[];

  constructor(public dialogRef: MatDialogRef<SocieteComponent>,
              private notif: NotificationService,
              private service: SocietesService,
              private _Pays: PaysService) { }

  ngOnInit() {
    this.chargePays();
  }

  chargePays() {
    this._Pays.getPays().subscribe(res =>{
      this.Pays = res;
    });
  }

  // fermeture de popup avec retour "false"
  CloseDialog() {
    this.service.InitialForm();
    this.dialogRef.close(false);
  }


  OnSubmit() {
    this.societe = new Societe(
      this.service.myForm.controls['id'].value,
      this.service.myForm.controls['nom'].value,
      this.service.myForm.controls['secteur'].value,
      this.service.myForm.controls['ville'].value,
      this.service.myForm.controls['codePostale'].value,
      this.service.myForm.controls['adresse'].value,
      this.service.myForm.controls['tlf'].value,
      this.service.myForm.controls['email'].value,
      this.Pays[this.service.myForm.controls['pays'].value-1]
    );
    console.log(this.societe);
    if (!this.service.myForm.controls['id'].value) {
      this.service.addSociete(this.societe).subscribe(result =>{
        this.notif.success('Société est ajouter avec succès');
        this.service.InitialForm();
        this.CloseDialog();
      });
    } else {
      this.service.updateSociete(this.societe.id, this.societe).
      subscribe(res => {
        this.notif.success('Société est modifier avec succès');
        this.service.InitialForm();
        this.CloseDialog();
      });
    }
  }

}
