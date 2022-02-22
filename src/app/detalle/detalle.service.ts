import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Libro } from '../biblioteca/busqueda/interfaces/libro.interface';
@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  private _storage: Storage | null = null;
  private listalibrosfavoritos:Libro[]=[];
  constructor(private storage: Storage) {
    this.init();

  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, libro:Libro) {
    this.listalibrosfavoritos.push(libro)
    this._storage?.set(key, this.listalibrosfavoritos);
  }

  public deleteLibro(pos:number){
    this.listalibrosfavoritos.splice(pos);
    this._storage?.set("favoritos", this.listalibrosfavoritos);
    console.log(localStorage.getItem("favoritos"));

  }

  get getLibrosFavoritos(){
    return this.listalibrosfavoritos;
  }
}
