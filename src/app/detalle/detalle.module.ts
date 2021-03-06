import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { LibrosService } from '../biblioteca/busqueda/services/libro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule
  ],
  providers:[LibrosService],
  exports:[DetallePage],
  declarations: [DetallePage]
})
export class DetallePageModule {}
