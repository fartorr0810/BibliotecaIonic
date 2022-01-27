import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './autor/autor/autor.component';
import { CurriculumPage } from './curriculum/curriculum.page';
import { BibliotecaPage } from './biblioteca/biblioteca/biblioteca.page';

const routes: Routes = [
  {
    //Esto es lazy loading.
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'biblioteca',
    component:BibliotecaPage },
    {
    path: 'autor',
    component:AutorComponent,children:[]
   },
   {
    path:'autor/curriculum',
    component: CurriculumPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
