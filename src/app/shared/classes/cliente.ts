import { Direccion } from "./direccion";

export class Cliente {
  id: string;
  nombre: string;
  email: string;
  contra: string;
  direccion: Direccion;
  telefono: string;
  celular: string;
  constructor(
    id?: string,
    nombre?: string,
    email?: string,
    contra?: string,
    direccion?: Direccion,
    telefono?: string,
    celular?: string) {
      this.id = id || "";
      this.nombre = nombre || "";
      this.email = email || "";
      this.contra = contra || "";
      this.direccion = direccion || new Direccion();
      this.telefono = telefono || "";
      this.celular = celular || "";
  }
}