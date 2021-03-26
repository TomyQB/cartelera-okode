import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { PrincipalComponent } from '../app/conteiner/principal/principal.component'
import { ComponentesModule } from './componentes//principal-page/componentes.module'
import { TarjetaPeliculaModule } from './componentes/tarjeta-pelicula/tarjeta-pelicula.module'


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentesModule,
    TarjetaPeliculaModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
