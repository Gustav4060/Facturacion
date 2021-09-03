import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url: string = 'http://localhost:8087/clientes/api/v1/listarClientes';
  private urlInsert: string =
    'http://localhost:8087/clientes/api/v1//inscliente';
  private urlgetById: string =
    'http://localhost:8087/clientes/api/v1/clientePorId';
  constructor(private http: HttpClient) {}
  //obtener cliente
  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlInsert, cliente);
  }
  getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.urlgetById + '/' + id);
  }
}
