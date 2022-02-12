import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Libro } from './busqueda/interfaces/libro.interface';
import { LibrosService } from './busqueda/services/libro.service';
import { escaner } from './interfaces/escaner.interface';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: [],
})
export class BibliotecaPage implements OnInit {
  encodedData: any;
  mostrardiv:boolean = false;
  scannedBarCode: escaner;
  barcodeScannerOptions: BarcodeScannerOptions;

  libros:Libro[] = [];
  busqueda: string='';
  constructor(private librosService:LibrosService,private route:Router,
    private scaner:BarcodeScanner) {
      this.encodedData = "Programming isn't about what you know";

      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };
    }

  ngOnInit() {}

  getLibros(busqueda:string){
    console.log(busqueda);
    this.busqueda=busqueda;
    this.librosService.getLibros(this.busqueda).subscribe(datos =>{
      this.libros = datos.docs;
    });
  }
  scanBRcode() {
    this.scaner.scan().then(res => {
      this.mostrardiv=true;
      this.scannedBarCode = res;
      this.route.navigate(['/detalle',this.scannedBarCode.text]);
      }).catch(err => {
        console.log(err);
      });
  }
}
