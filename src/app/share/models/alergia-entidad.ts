export interface AlergiaEntidad {
  id: number;
  nombre: string;
  categoria: string;
  reaccion: string;
  observacion: string;
  imagen: string;
  creadaPorAdmin: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
