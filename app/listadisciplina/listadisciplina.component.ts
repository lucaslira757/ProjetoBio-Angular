import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadisciplina',
  templateUrl: './listadisciplina.component.html',
  styleUrls: ['./listadisciplina.component.css']
})
export class ListadisciplinaComponent implements OnInit {
  disciplina = [
    {Nome : 'Algoritimos I', Perido: '1º'},{Nome : 'Introdução a computação', Perido: '1'},
    {Nome : 'Algoritimos II', Perido: '2º'},{Nome : 'Banco de dados I', Perido: '2º'},
    {Nome : 'Banco de dados II', Perido: '3º'},{Nome : 'Programação orientado a objetos', Perido: '3º'},
    {Nome : 'Progamação para Web', Perido: '4º'},{Nome : 'Estrutura de dados II', Perido: '4'},
    {Nome : 'Análise de Algoritimo', Perido: '5º'},{Nome : 'Matemática discreta', Perido: '5º'},
    {Nome : 'Computação Gráfica', Perido: '6º'},
];
  constructor() { }

  ngOnInit() {
  }

}
