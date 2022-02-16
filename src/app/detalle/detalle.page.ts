import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../biblioteca/busqueda/interfaces/libro.interface';
import { LibrosService } from '../biblioteca/busqueda/services/libro.service';
import { Storage } from '@ionic/storage-angular';
import { DetalleService } from './detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: [],
})
export class DetallePage implements OnInit {
  libro!:Libro;
  mostrardiv:boolean=false;
  favorito:boolean=false;
  constructor(private activadorruta:ActivatedRoute,private serviciolibro:LibrosService,
    private storage: Storage,private detalle:DetalleService) { }

  async ngOnInit() {
    this.getLibro();
    await this.storage.create();
  }
  getLibro(){
    this.serviciolibro.getLibro(this.activadorruta.snapshot.params["isbn"]).subscribe(resp=>{
      this.libro = resp.docs[0];
      this.mostrardiv = true;
    });
  }
  anadirFavorito(){
    if (this.favorito==true){
      this.favorito=false;
    }else{
      this.favorito=true;
      this.detalle.set("prueba",this.libro)

    }

  }
}
