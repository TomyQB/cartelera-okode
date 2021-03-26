import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TarjetaPeliculaComponent } from '../tarjeta-pelicula/tarjeta-pelicula.component'



@NgModule({
  declarations: [TarjetaPeliculaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot()
  ],
  exports:[
    TarjetaPeliculaComponent
  ]
})

export class TarjetaPeliculaModule { }
