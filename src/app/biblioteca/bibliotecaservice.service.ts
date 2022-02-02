import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Librito, LibroSearch } from './biblioteca/Interfaces/libro.interface';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaserviceService {

  private url=environment.urlApi;

  constructor(private http: HttpClient) {
  }
  obtenerLibros(): Observable<LibroSearch>{
    return this.http.get<LibroSearch>(this.url);
  }
  obtenerLibroIndividual(isbn:string){
    let url =`http://openlibrary.org/search.json?isbn=${isbn}`;
    return this.http.get<LibroSearch>(url);
  }
}
