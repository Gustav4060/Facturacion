export class Cliente {
   idCliente: number;
   nombre: string;
   apellido: string;
   direccion: string;
   fechaNacimiento: Date;
   telefono: string;
   email: string;
  constructor(
   idCliente: number,
   nombre: string,
   apellido: string,
   direccion: string,
   fechaNacimiento: Date,
   telefono: string,
   email: string
  ){
    this.idCliente=idCliente;
    this.nombre=nombre;
    this.apellido=apellido;
    this.direccion=direccion;
    this.fechaNacimiento=fechaNacimiento;
    this.telefono=telefono;
    this.email=telefono;
  }
}
