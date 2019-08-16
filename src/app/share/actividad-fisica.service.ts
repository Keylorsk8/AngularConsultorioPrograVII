import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { CustomHandlerErrorService } from './custom-handler-error.service';
import { UsuarioLogin } from './models/usuarioLogin';
import { ActividadFisicaEntidad } from './models/actividad-fisica-entidad';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActividadFisica } from './models/actividad-fisica';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadFisicaService {
  currentUser: UsuarioLogin;
  $actividad: ActividadFisicaEntidad;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;
  errorData: {};
  user: null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private handler: CustomHandlerErrorService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  getActividadesFisicas(): Observable<ActividadFisica> {
    return this.http
      .get<ActividadFisica>(this.ServerUrl + 'ActividadFisica/actividadFisica')
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  obtenerImagen(rutaImagen) {
    return this.ServerUrl + 'ActividadFisica/obtenerImagen/' + rutaImagen;
  }
}
