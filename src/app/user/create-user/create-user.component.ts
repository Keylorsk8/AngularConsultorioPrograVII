import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { RolEntidad } from 'src/app/share/models/rol-entidad';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { ErrorEntidad } from 'src/app/share/models/error-entidad';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, DoCheck {
  usuario: UserEntidad;
  datos: UserEntidad;
  roles: RolEntidad;
  error: any;
  constructor(
    private router: Router,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {

  }

  ngOnInit() {}
  ngDoCheck() {}
  onSubmit(obj: UserEntidad) {
    // suscripción para uso del servicio
    this.auntenticationService.createUser(obj).subscribe(
      (respuesta: UserEntidad) => (this.datos = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjError('', this.error.statusText);
      },
      () => {
        this.router.navigate(['/usuario/login'], { queryParams: { registrado: 'true' } });
      }
    );
  }
}
