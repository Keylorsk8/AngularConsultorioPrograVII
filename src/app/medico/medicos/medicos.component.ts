import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { User } from 'src/app/share/models/user';
import { Especialidad } from 'src/app/share/models/especialidad';
import { EspecialidadEntidad } from 'src/app/share/models/especialidad-entidad';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  datos: User;
  medicos: UserEntidad[];
  especialidad: Especialidad;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) { }

  ngOnInit() {
    let notifM = false;
    this.route.queryParams.subscribe(params => {
      notifM = params.medico || false;
    });

    if (notifM) {
      this.notificacion.msjSuccess(
        'Médico creado!',
        'Crear Médico'
      );
    }

    this.authenticationService
      .getMedicos()
      .subscribe(
        (respuesta: User) => (this.datos = respuesta),
        error => (this.error = error)
    );
  }
  linkCrear() {
    this.router.navigate(['/crear']);
  }
}
