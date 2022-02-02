import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { BibliotecaserviceService } from '../bibliotecaservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LibroespecificoPageModule } from 'src/app/libroespecifico/libroespecifico.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    LibroespecificoPageModule,
    HttpClientModule
  ],
  providers:[BibliotecaserviceService],
  declarations: [BibliotecaPage],
  exports:[BibliotecaPage]
})
export class BibliotecaPageModule {}
