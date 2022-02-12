import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from '../interfaces/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { }

  getLibros(busqueda:string):Observable<Libros>{
    let url = "http://openlibrary.org/search.json";
    console.log(busqueda)
    const params = new HttpParams()
    .set('title',busqueda)
    .set('limit',5);
    return this.http.get<Libros>(url,{params:params});
  }

  getLibro(isbn:string){
    let url = `http://openlibrary.org/search.json?isbn=${isbn}`;
    return this.http.get<Libros>(url);
  }
}
