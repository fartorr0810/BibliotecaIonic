import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  @Output() lanzador: EventEmitter<string> = new EventEmitter();
  busqueda:string = '';

  constructor() { }

  ngOnInit() {}

  buscar(){
    this.lanzador.emit(this.busqueda);
  }
}
