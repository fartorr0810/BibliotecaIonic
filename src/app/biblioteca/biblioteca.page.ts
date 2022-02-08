import { Component, OnInit } from '@angular/core';
import { Libro } from './busqueda/interfaces/libro.interface';
import { LibrosService } from './busqueda/services/libro.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  libros:Libro[] = [];
  termino: string='';
  constructor(private librosService:LibrosService) { }

  ngOnInit() {

  }

  getLibros(termino:string){
    this.termino=termino;
    this.librosService.getLibros(this.termino).subscribe(datos =>{
      this.libros = datos.docs;
    });
  }
}
