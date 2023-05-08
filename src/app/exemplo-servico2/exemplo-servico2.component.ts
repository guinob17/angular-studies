import { Component } from '@angular/core';
import { LoggerService } from '../logger.service/logger.service.component';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  descricao = "";
  constructor(public logger: LoggerService){}
  adicionarProduto(){
    this.logger.logar(`A descrição ${this.descricao} foi adicionada!`)
  }
}
