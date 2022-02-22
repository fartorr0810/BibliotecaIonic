import { Component, OnInit } from '@angular/core';
import { Libro } from '../biblioteca/busqueda/interfaces/libro.interface';
import { DetalleService } from '../detalle/detalle.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  libros:Libro[]=[]
  constructor(private serviciolibros:DetalleService) { }

  ngOnInit() {
    this.libros=this.serviciolibros.getLibrosFavoritos;
  }

}
