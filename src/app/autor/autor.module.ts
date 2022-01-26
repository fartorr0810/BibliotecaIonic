import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorComponent } from './autor/autor.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AutorComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[AutorComponent]
})
export class AutorModule { }
