import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FichaComponent } from '../principal-page/ficha/ficha.component'
import { SlideComponent } from '../principal-page/slide/slide.component'



@NgModule({
  declarations: [SlideComponent, FichaComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[
    SlideComponent,
    FichaComponent,
  ]
})

export class ComponentesModule { }
