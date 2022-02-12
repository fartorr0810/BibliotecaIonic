import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: [],
})
export class BusquedaComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  busqueda:string = '';

  constructor() { }

  ngOnInit() {}

  buscar(){
    this.onEnter.emit(this.busqueda);
  }
}
