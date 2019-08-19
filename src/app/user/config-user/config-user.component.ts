import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlergiaService } from 'src/app/share/alergia.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { User } from 'src/app/share/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.css']
})
export class ConfigUserComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<UsuarioLogin>;
  public currentUser: Observable<UsuarioLogin>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    this.currentUserSubject = new BehaviorSubject<UsuarioLogin>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
   }
  user: UserEntidad;
  datos: User;
  error: any;

  ngOnInit() {
    this.authenticationService.me().subscribe(
      (respuesta: User) => {
        this.datos = respuesta;
        this.ale = this.datos.Usuarios[0];
      },
      error => (this.error = error)
    );
  }

  public get currentUserValue(): UsuarioLogin {
    return this.currentUserSubject.value;
  }

}
