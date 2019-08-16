import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from './models/usuarioLogin';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { CustomHandlerErrorService } from './custom-handler-error.service';
import { Alergia } from './models/alergia';
import { AlergiaEntidad } from './models/alergia-entidad';

@Injectable({
  providedIn: 'root'
})
export class AlergiaService {
  currentUser: UsuarioLogin;
  $alergy: AlergiaEntidad;
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

  // HttpClient API get() method => Listado de alergias
  getAlergias(): Observable<Alergia> {
    return this.http
      .get<Alergia>(this.ServerUrl + 'alergia')
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // HttpClient API get() method => Obtener alergia
  getAlergia(id: any): Observable<Alergia> {
    return this.http.get<Alergia>(this.ServerUrl + 'alergias/' + id).pipe(
      retry(1),
      catchError(this.handler.handleError.bind(this))
    );
  }
  // HttpClient API post() method => Create alergia
  createAlergia(alergia: AlergiaEntidad): Observable<Alergia> {
    this.$alergy = alergia;
    alergia.creadaPorAdmin = 1;
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Alergia>(this.ServerUrl + 'alergias/', this.$alergy, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // HttpClient API put() method => Update alergia
  updateAlergia(id: any, alergia: AlergiaEntidad): Observable<Alergia> {
    this.$alergy = alergia;
    this.$alergy.creadaPorAdmin = 1;
    this.$alergy.created_at = new Date();
    this.$alergy.updated_at = new Date();
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .put<Alergia>(this.ServerUrl + 'alergias/' + id, alergia, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Listar todos los alergias
  getAlergiasAll(): Observable<Alergia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Alergia>(this.ServerUrl + 'alergia/all', { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Obtener alergias eliminadas
  getAlergiasDeleted(): Observable<Alergia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Alergia>(this.ServerUrl + 'alergia/eliminadas', { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Eliminar una alergia
  eliminarAlergia(id: any): Observable<Alergia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Alergia>(this.ServerUrl + 'alergia/delete/' + id, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Restaurar una alergia eliminada
  restaurarAlergia(id: any): Observable<Alergia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Alergia>(this.ServerUrl + 'alergia/recuperarAlergia/' + id, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Obtner imagen de Alergia
  obtenerImagen(rutaImagen) {
    return this.ServerUrl + 'alergia/obtenerImagen/' + rutaImagen;
  }

  guardarFoto(obj: any, id: number): Observable<any> {
    return this.http.post(this.ServerUrl + 'alergia/saveImage/' + id, obj).pipe(
      catchError(err => {
        console.log('Error:', err);
        return throwError(err);
      })
    );
  }
}
