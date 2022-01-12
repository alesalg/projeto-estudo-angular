import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  date = new Date();
  nome = 'Alexandre';
  percentual = 0.55898342432;
  salario = 3000;

  constructor() { }

  ngOnInit(): void {
  }

}
