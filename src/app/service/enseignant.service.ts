import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Enseignant } from '../model/enseignant';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  myForm: FormGroup = new FormGroup({
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
    password : new FormControl(''),
    grade : new FormControl('', Validators.required)
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

  public getEnseignants(): Observable<Enseignant[]> {
    return this.httpClient.get<Enseignant[]>(this.apiUrl + 'enseignants');
  }

  public addEnseignant(ens: Enseignant){
    return this.httpClient.post(this.apiUrl + 'enseignants', ens);
  }

  public deleteEnseignant(id: number){
    return this.httpClient.delete(this.apiUrl + 'enseignants/' + id);
  }

  public updateEnseignant(id: number,ens: Enseignant){
    return this.httpClient.put(this.apiUrl + 'enseignants/' + id, ens);
  }

}
