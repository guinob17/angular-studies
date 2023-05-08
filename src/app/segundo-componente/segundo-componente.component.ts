import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Guilherme";
  dataNascimento = "17/09/1998";
  urlImagem = "/assets/126495014.jpg";
  mostrarDataNascimento(){
    alert(`A minha data de nascimento é ${this.dataNascimento}!`)
  }
}
