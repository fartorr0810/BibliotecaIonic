import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AutorModule } from './autor/autor.module';
import { HomePageModule } from './home/home.module';
import { CurriculumPageRoutingModule } from './curriculum/curriculum-routing.module';
import { BibliotecaPageModule } from './biblioteca/biblioteca/biblioteca.module';
import { BibliotecaserviceService } from './biblioteca/bibliotecaservice.service';
@NgModule({
  declarations: [AppComponent,HomeComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AutorModule,HomePageModule,CurriculumPageRoutingModule,BibliotecaPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },BibliotecaserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
