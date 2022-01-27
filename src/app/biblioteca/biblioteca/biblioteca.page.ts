import { Component, OnInit } from '@angular/core';
import { BibliotecaserviceService } from '../bibliotecaservice.service';
import { Librito, LibroSearch } from './Interfaces/libro.interface';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: [],
})
export class BibliotecaPage implements OnInit {

  libros:Librito[]=[];

  constructor(private biblioServicio:BibliotecaserviceService) { }

  ngOnInit() {
    this.getLibros();
  }
  getLibros(){
    this.biblioServicio.obtenerLibros().subscribe(resp =>{
      this.libros = resp.docs;
      console.log(resp);
    });
  }


}
