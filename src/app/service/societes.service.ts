import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Societe } from '../model/societe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pays } from '../model/pays';


@Injectable({
  providedIn: 'root'
})
export class SocietesService {
  myForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom : new FormControl('', Validators.required),
    secteur : new FormControl('', Validators.required),
    ville : new FormControl(null, Validators.required),
    codePostale : new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
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
    pays: new FormControl(null, Validators.required)
  });
  apiUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

    // getters and setters for form
    get Id() {
      return this.myForm.get('id');
    }
    get Nom() {
      return this.myForm.get('nom');
    }
    get Secteur() {
      return this.myForm.get('secteur');
    }
    get Tlf() {
      return this.myForm.get('tlf');
    }
    get Email() {
      return this.myForm.get('email');
    }
    get Ville() {
      return this.myForm.get('ville');
    }
    get Adresse() {
      return this.myForm.get('adresse');
    }
    get CodePostale() {
      return this.myForm.get('codePostale');
    }
  InitialForm() {
    this.myForm.reset();
  }

  public getSocietes(): Observable<Societe[]> {
    return this.httpClient.get<Societe[]>(this.apiUrl + 'societes');
  }

  public addSociete(sc: Societe){
    return this.httpClient.post(this.apiUrl + 'societes', sc);
  }

  public deleteSociete(id: number){
    return this.httpClient.delete(this.apiUrl + 'societes/' + id);
  }

  public updateSociete(id: number, sc: Societe){
    return this.httpClient.put(this.apiUrl + 'societes/' + id, sc);
  }
}
