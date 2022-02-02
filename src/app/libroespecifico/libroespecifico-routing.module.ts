import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroespecificoPage } from './libroespecifico.page';

const routes: Routes = [
  {
    path: '',
    component: LibroespecificoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroespecificoPageRoutingModule {}
