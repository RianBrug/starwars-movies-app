import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = 'https://swapi.co/api'

  getFilms(): Observable<Object> {
    return this.http.get<Object>(this.url+'/films').pipe(
        map(data => {
          var sortedArray = data['results'];
          sortedArray.sort((a,b) => b.release_date.localeCompare(a.release_date));
          return sortedArray;
        }));
      }
}
