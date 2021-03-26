import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() titulosSlide: any;


  slideOptions = {
    slidesPerView: window.innerWidth / 210
  }

  films: any

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFilms(this.titulosSlide.url).subscribe(data => {
      this.films = data["results"]
    })
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.slideOptions = {
      slidesPerView: window.innerWidth / 210
    }
  }

}
