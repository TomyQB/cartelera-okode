import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: ['./tarjeta-pelicula.component.scss'],
})
export class TarjetaPeliculaComponent implements OnInit {

  selectFilm: any
  detailsFilm: any

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log(history.state.id)
    console.log(history.state.film)
    this.selectFilm = history.state.film
    this.apiService.getFilmDetails("784957").subscribe(data => {
      console.log(data)
      this.detailsFilm = data
      console.log(this.detailsFilm['genres'][0].name)
    })
  }

}
