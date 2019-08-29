import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) { }

  url = 'https://swapi.co/api/films/?search='

  getFilmByTitle(title): Observable<Object> {
    return this.http.get<Object>(this.url+title);
  }
}
