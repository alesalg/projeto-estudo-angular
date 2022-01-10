import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.scss']
})
export class ExercicioDoisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  idade: number = 0;

  diminuir() {
    if(this.idade > 0) {
      this.idade--
    } else {
      this.idade = 0
    }
  }

  aumentar() {
    this.idade ++
  }
}
