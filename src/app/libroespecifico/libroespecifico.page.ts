import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Librito, LibroSearch } from '../biblioteca/biblioteca/Interfaces/libro.interface';
import { BibliotecaserviceService } from '../biblioteca/bibliotecaservice.service';

@Component({
  selector: 'app-libroespecifico',
  templateUrl: './libroespecifico.page.html',
  styleUrls: [],
})
export class LibroespecificoPage implements OnInit {

  libro!:LibroSearch;

  constructor(private bibliotecaService:BibliotecaserviceService, private ruta:ActivatedRoute) { }

  ngOnInit() {
    this.getLibro();
  }
  getLibro(){
    this.bibliotecaService.obtenerLibroIndividual(this.ruta.snapshot.params["isbn"]).subscribe(datos=>{
      console.log(datos);
      this.libro=datos;
      console.log(this.libro);
    });
  }
}
