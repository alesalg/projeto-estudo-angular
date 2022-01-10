import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'Alexandre';
  idade = 30;

  linkImagem = 'https://images.unsplash.com/photo-1641499414064-306123010a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'

  larguraImagem = 30;
  alturaImagem = 30;

  calculaAnoNascimento(): number {
    const today = new Date();

    return today.getFullYear() - this.idade;
  }

  aumentar() {
    this.larguraImagem += 20;
    this.alturaImagem += 15;
  }

  diminuir() {
    this.larguraImagem -= 20;
    this.alturaImagem -= 15;
  }
}
