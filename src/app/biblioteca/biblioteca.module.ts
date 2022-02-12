import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';
import { HttpClient } from '@angular/common/http';
import { BibliotecaPage } from './biblioteca.page';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LibrosService } from './busqueda/services/libro.service';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BibliotecaPage,BusquedaComponent,TablaComponent],
  providers:[LibrosService]
})
export class BibliotecaPageModule {}
