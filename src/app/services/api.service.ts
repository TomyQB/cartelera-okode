import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  url: string = "https://api.themoviedb.org/3/"

  getFilmByName(complemetsURL: string) {
    return this.http.get(this.url + "search/movie?api_key=816e0c1925f35230050d8e587731ab55&query=" + complemetsURL)
  }

  getFilmDetails(id: string) {
    return this.http.get(this.url + "movie/" + id + "movie?api_key=816e0c1925f35230050d8e587731ab55&languaje=es-ES")
  }

  getFilms(complemetsURL: string) {
    return this.http.get(this.url + complemetsURL)
  }

}
