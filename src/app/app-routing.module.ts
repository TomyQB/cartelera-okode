import { PrincipalComponent } from './conteiner/principal/principal.component';
import { TarjetaPeliculaComponent } from './componentes/tarjeta-pelicula/tarjeta-pelicula.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PrincipalComponent
  },
  {
    path: 'tarjetaPelicula',
    component: TarjetaPeliculaComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
