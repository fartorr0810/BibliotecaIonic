import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {
  public autor = {
    correo: "frankarroyop@gmail.com",
    twitter: "https://twitter.com/arrtorf",
    telefono: "608839891"
  }
  constructor() { }

  ngOnInit() {
  }

}
