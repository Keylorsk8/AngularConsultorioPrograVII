export interface UserEntidad {
  id: number;
  email: string;
  name: string;
  primerApellido: string;
  segundoApellido: string;
  password: string;
  sexo: string;
  rol_id: number;
  especialidad_id: number;
  remember_token: string;
  email_verified_at: Date;
  created_at: Date;
  updated_at: Date;
}
