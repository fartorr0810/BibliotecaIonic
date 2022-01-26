import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaserviceService } from './bibliotecaservice.service';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';


@NgModule({
  declarations: [
    BibliotecaComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[BibliotecaserviceService]
})
export class BibliotecaModule { }
