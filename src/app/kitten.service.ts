import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kitten } from './models/kitten';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  private static readonly API_URL = 'http://localhost:8080/kittens';

  constructor(private http: HttpClient) { }

  findAllUnAdopdtedCats(): Observable<Kitten[]>{
    return this.http.get<Kitten[]>(KittenService.API_URL + '?isAdopted=false');
  }
  findCatById(id: number): Observable<Kitten>{
    return this.http.get<Kitten>(KittenService.API_URL + '/' + id);
  }
}
