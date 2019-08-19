import { Component, OnInit, DoCheck } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { RolEntidad } from 'src/app/share/models/rol-entidad';
import { ErrorEntidad } from 'src/app/alergia/create-alergia/create-alergia.component';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { EspecialidadEntidad } from 'src/app/share/models/especialidad-entidad';
import { Especialidad } from 'src/app/share/models/especialidad';
import { AlergiaService } from 'src/app/share/alergia.service';

@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.css']
})
export class CreateMedicoComponent implements OnInit, DoCheck {
  usuario: UserEntidad;
  datos: UserEntidad;
  especialidades: Especialidad;
  error: ErrorEntidad[];
  constructor(
    private router: Router,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {  this.getEspecialidad(); }

  ngOnInit() {

  }
  ngDoCheck() {}
  onSubmit(obj: UserEntidad) {
    // suscripción para uso del servicio
    this.auntenticationService.createMedico(obj).subscribe(
      (respuesta: UserEntidad) => (this.datos = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      },
      () => {
        this.router.navigate(['/medicoM'], { queryParams: { medico: 'true' } });
      }
    );
  }

  getEspecialidad() {
    return this.auntenticationService.getEspecialidades().subscribe(
      (respuesta: Especialidad) => (this.especialidades = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
    );
  }


}
