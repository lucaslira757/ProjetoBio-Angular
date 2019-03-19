import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listainteresse',
  templateUrl: './listainteresse.component.html',
  styleUrls: ['./listainteresse.component.css']
})
export class ListainteresseComponent implements OnInit {
  interesse = [
    {Nome : 'Games'},
    {Nome : 'Política'},
    {Nome : 'Animes'},
    {Nome : 'Desenvolvimento Web'}

  ];
  constructor() { }

  ngOnInit() {
  }

}
