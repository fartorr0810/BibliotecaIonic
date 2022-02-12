import { Component, OnInit } from '@angular/core';
import { Libro } from './busqueda/interfaces/libro.interface';
import { LibrosService } from './busqueda/services/libro.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: [],
})
export class BibliotecaPage implements OnInit {

  libros:Libro[] = [];
  busqueda: string='';
  constructor(private librosService:LibrosService) { }

  ngOnInit() {

  }

  getLibros(busqueda:string){
    console.log(busqueda);
    this.busqueda=busqueda;
    this.librosService.getLibros(this.busqueda).subscribe(datos =>{
      this.libros = datos.docs;
    });
  }
}
