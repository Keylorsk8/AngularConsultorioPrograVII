import { Injectable } from '@angular/core';
import { Enfermedad } from './models/enfermedad';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioLogin } from './models/usuarioLogin';
import { EnfermedadEntidad } from './models/enfermedad-entidad';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { CustomHandlerErrorService } from './custom-handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {
  currentUser: UsuarioLogin;
  $enfermedad: EnfermedadEntidad;
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

  getEnfermedades(): Observable<Enfermedad> {
    return this.http
    .get<Enfermedad>(this.ServerUrl + 'Enfermedad/enfermedad')
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  obtenerImagen(rutaImagen) {
    return this.ServerUrl + 'Enfermedad/obtenerImagen/' + rutaImagen;
  }
}
