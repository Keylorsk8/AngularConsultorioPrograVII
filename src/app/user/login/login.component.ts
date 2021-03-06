import { Component, OnInit } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UserEntidad;
  datos: UsuarioLogin;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    if (auntenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    const parametro = +this.route.snapshot.paramMap.get('accion');
    this.route.queryParams.subscribe(params => {
      if (params.registrado !== undefined && params.registrado === 'true') {
        this.notificacion.msjSuccess(
          'Registro de usuario satisfactorio! Por favor especifique las credenciales para ingresar!',
          'Usuario'
        );
      }
    });
  }
  onSubmit(obj: UserEntidad) {
    // suscripción para uso del servicio
    this.auntenticationService.loginUser(obj).subscribe(
      (respuesta: UsuarioLogin) => (this.datos = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjError('', this.error.statusText);
      },
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
