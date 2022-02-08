import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../busqueda/interfaces/libro.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {

  @Input() librosTabla: Libro[] = [];

  constructor() { }

  ngOnInit() {}

  verDetalles(isbn:string){

  }
}
