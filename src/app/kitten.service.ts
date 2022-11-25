import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Kitten } from './models/kitten';

@Injectable({
  providedIn: 'root'
})
export class KittenService {
  [x: string]: any;

  private static readonly API_URL = 'http://localhost:8080/kittens';

  constructor(private http: HttpClient) { }

  findAllUnAdopdtedCats(): Observable<Kitten[]>{
    return this.http.get<Kitten[]>(KittenService.API_URL + '?isAdopted=false');
  }
  findCatById(id: number): Observable<Kitten>{
    return this.http.get<Kitten>(KittenService.API_URL + '/' + id).pipe(tap(console.log));
  }
  delete(id: number) {
    return this.http.delete(KittenService.API_URL + '/' + id)
  }
  update(id: number, kitten: Kitten): Observable<object> {
    return this.http.put(KittenService.API_URL + '/' + id, kitten);
  }
  findAllAdopdtedCats(): Observable<Kitten[]>{
    return this.http.get<Kitten[]>(KittenService.API_URL + '?isAdopted=true');
  }
  adopted(id: number): Observable<Kitten> {
    return this.http.post<Kitten>(KittenService.API_URL +'/'+ id + '/adopt', id );
  }
  createCat(kitten: Kitten): Observable<Kitten> {
    return this.http.post<Kitten>(KittenService.API_URL, kitten);
  }
}
