import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes = new Array<Cliente>();

  constructor(private clienteServicio: ClienteService) {}

  ngOnInit(): void {
    this.clienteServicio.getAll().subscribe(response => {
      this.clientes = response.map(item =>
        {
          return new Cliente(
              item.idCliente,
              item.nombre,
              item.apellido,
              item.direccion,
              item.fechaNacimiento,
              item.telefono,
              item.email
          );
        });
    });
  }
  titulo: string = 'Lista de Clientes';
}
