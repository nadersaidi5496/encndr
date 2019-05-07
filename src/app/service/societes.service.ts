import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Societe } from '../model/societe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocietesService {
  myForm: FormGroup = new FormGroup({
    Id: new FormControl(null),
    Nom : new FormControl('', Validators.required),
    Secteur : new FormControl('', Validators.required),
    Ville : new FormControl(null, Validators.required),
    CodePostale : new FormControl('', Validators.required),
    Adresse: new FormControl('', Validators.required),
    Tlf : new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8),
      Validators.pattern('[1-9]+[0-9]*')
    ]),
    Email : new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });
  apiUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

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

  public getSocietes(): Observable<Societe[]> {
    return this.httpClient.get<Societe[]>(this.apiUrl + 'societes')
  }

  public addSociete(ens: Societe){
    return this.httpClient.post(this.apiUrl + 'societes', ens);
  }

  public deleteSociete(id: number){
    return this.httpClient.delete(this.apiUrl + 'societes/' + id);
  }

  public updateSociete(id: number,ens: Societe){
    return this.httpClient.put(this.apiUrl + 'societes/' + id, ens);
  }
}
