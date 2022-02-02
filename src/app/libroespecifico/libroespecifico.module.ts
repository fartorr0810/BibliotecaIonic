import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroespecificoPageRoutingModule } from './libroespecifico-routing.module';

import { LibroespecificoPage } from './libroespecifico.page';
import { BibliotecaserviceService } from '../biblioteca/bibliotecaservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroespecificoPageRoutingModule,
  ],
  declarations: [LibroespecificoPage],
  exports:[LibroespecificoPage],
  providers:[BibliotecaserviceService]
})
export class LibroespecificoPageModule {}
