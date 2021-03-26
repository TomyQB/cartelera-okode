import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FichaComponent } from '../principal-page/ficha/ficha.component'
import { SlideComponent } from '../principal-page/slide/slide.component'
import { SearchFichaComponent } from '../principal-page/search-ficha/search-ficha.component'



@NgModule({
  declarations: [SlideComponent, FichaComponent, SearchFichaComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[
    SlideComponent,
    FichaComponent,
    SearchFichaComponent
  ]
})

export class ComponentesModule { }
