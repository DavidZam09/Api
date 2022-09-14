import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

  getData(name: any) {
    return this.http.get(`${this.url}/${name}`)
  }
}
