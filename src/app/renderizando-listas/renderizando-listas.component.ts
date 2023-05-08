import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "Celular Samsung", descricao:"grande", esgotado:false},
    {id: 2, nome: "Iphone", descricao:"medio", esgotado:true},
    {id: 3, nome: "Xiaomi", descricao:"pequeno", esgotado:false}
  ]
}
