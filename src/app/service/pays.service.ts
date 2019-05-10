import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pays } from '../model/pays';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  apiUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  public getPays(): Observable<Pays[]> {
    return this.httpClient.get<Pays[]>(this.apiUrl + 'pays');
  }

  public getPaysById(id: number): Observable<Pays> {
    return this.httpClient.get<Pays>(this.apiUrl + 'pays/' + id);
  }

}
