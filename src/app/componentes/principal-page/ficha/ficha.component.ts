import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
})
export class FichaComponent implements OnInit {
  @Input() completeInfoFilm: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navFilmDetail(film: any) {
    console.log(film)
    this.router.navigateByUrl("/tarjetaPelicula", {state: {id: film['id'], film: film}})
  }

  p() {
    console.log('hola')
  }

}
