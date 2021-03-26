import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  eeuuRegion: string = "&region=US"
  film: string = "search/movie?"
  genres: string = "genre/movie/list?"
  mode: string = '&query='
  key: string = "api_key=816e0c1925f35230050d8e587731ab55"
  language: string = "&language=es-ES"
  page2: string = "&page=2"
  page4: string = "&page=4"
  playing: string = "movie/now_playing?"
  popular: string = "movie/popular?"
  rated: string = "movie/top_rated?"
  spainishRegion: string = "&region=ES"
  upcoming: string = "movie/upcoming?"

  listTitulos = [{titulo: "Peliculas españolas del momento", url: this.playing + this.key + this.spainishRegion + this.language + this.page2},
          {titulo: "Peliculas americanas del momento", url: this.playing + this.key + this.eeuuRegion + this.language + this.page4},
          {titulo: "Peliculas más populares", url: this.popular + this.key + this.language},
          {titulo: "Peliculas más votadas", url: this.rated + this.key + this.language},
          {titulo: "Proximamente", url: this.upcoming + this.key + this.language}
        ]

  buscarTitulo: string =""
  allFillByName: any

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getItems(event: any) {
    this.buscarTitulo = event.target.value;
    if(this.buscarTitulo != undefined) {
      this.apiService.getFilmByName(this.buscarTitulo).subscribe(data => {
        this.allFillByName = data["results"]
      })
      console.log(this.allFillByName)
    }
  }

}
