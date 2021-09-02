export class Cliente {
  constructor(
  public idCliente: number,
  public nombre: string,
  public apellido: string,
  public direccion: string,
  public fechaNacimiento: Date,
  public telefono: string,
  public email: string,
  ){}
}
