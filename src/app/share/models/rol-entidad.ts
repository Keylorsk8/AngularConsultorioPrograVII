export interface RolEntidad {
  msg: string;
  roles: {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
  }[];
}
