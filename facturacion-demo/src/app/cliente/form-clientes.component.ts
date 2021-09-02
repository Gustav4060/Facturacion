import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css'],
})
export class FormClientesComponent implements OnInit {
  cliente: Cliente = new Cliente(0, '', '', '', new Date(), '', '');
  titulo: string = 'Creacion de Clientes';
  constructor(
    private clienteServicio: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  create(): void {
    console.log(this.cliente);
    this.clienteServicio
      .create(this.cliente)
      .subscribe((res) => this.router.navigate(['/cliente']));
  }
}
