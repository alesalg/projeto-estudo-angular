import { Component, OnInit } from '@angular/core';
import { Pacientes } from './modelos/genero';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})


export class PacientesComponent implements OnInit {


  nome: string ='';
  data: string ='';
  cpf: string = '';
  email: string = ''

  pacientes: Pacientes[] = [
    {nome: 'Alexandre', data: '10/07/1991', cpf: "101.101.101-99", email: 'ale@gmail.com'},
    {nome: 'Alex', data: '10/07/1991', cpf: "101.101.101-99", email: 'ale@gmail.com'},
    {nome: 'Ale', data: '10/07/1991', cpf: "101.101.101-99", email: 'ale@gmail.com'}
  ];
//new date()
  del(index: number) {
    this.pacientes.splice(index, 1)
  }
  add() {
    this.pacientes.push({
      nome: this.nome,
      data: this.data,
      cpf: this.cpf,
      email: this.email
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}

//Extra 01) Adicione uma ação de deletar o paciente da tabela
//Extra 02) Faça um formulário para cadastrar os pacientes dentro do array
