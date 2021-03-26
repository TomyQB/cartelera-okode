import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-ficha',
  templateUrl: './search-ficha.component.html',
  styleUrls: ['./search-ficha.component.scss'],
})
export class SearchFichaComponent implements OnInit {
  @Input() searchFilm: string

  completeInfoFilm: any

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.searchFilm)
  }

  navFilmDetail(film: any) {
    console.log(film)
    this.router.navigateByUrl("/tarjetaPelicula", {state: {id: film['id'], film: film}})
  }

}
