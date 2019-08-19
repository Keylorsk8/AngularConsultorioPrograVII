import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserEntidad } from './models/user-entidad';
import { RolEntidad } from './models/rol-entidad';
import { UsuarioLogin } from './models/usuarioLogin';
import { ErrorEntidad } from '../alergia/create-alergia/create-alergia.component';
import { CustomHandlerErrorService } from './custom-handler-error.service';
import { Especialidad } from './models/especialidad';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;

  errorData: ErrorEntidad;
  user: null;
  usuario: UserEntidad;
  private currentUserSubject: BehaviorSubject<UsuarioLogin>;
  public currentUser: Observable<UsuarioLogin>;

  constructor(
    private http: HttpClient,
    private handler: CustomHandlerErrorService

  ) {
    this.currentUserSubject = new BehaviorSubject<UsuarioLogin>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UsuarioLogin {
    return this.currentUserSubject.value;
  }
  createUser(user: UserEntidad): Observable<UserEntidad> {
    this.usuario = user;
    this.usuario.especialidad_id = null;
    this.usuario.rol_id = 3;
    return this.http
      .post<UserEntidad>(
        this.ServerUrl + 'usuario/registrar',
        this.usuario,
        this.httpOptions
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  createMedico(user: UserEntidad): Observable<UserEntidad> {
    this.usuario = user;
    this.usuario.rol_id = 2;
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUserValue.access_token
      );
    }
    return this.http
      .post<UserEntidad>(
        this.ServerUrl + 'usuario/registrarMedico', this.usuario, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  loginUser(user: UserEntidad): Observable<UsuarioLogin> {
    return this.http
      .post<UsuarioLogin>(
        this.ServerUrl + 'usuario/login',
        user,
        this.httpOptions
      )
      .pipe(
        map(user => {
          // almacene los detalles del usuario y el token jwt en
          // el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    // eliminar usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  getEspecialidades(): Observable<Especialidad> {
    return this.http
      .get<Especialidad>(this.ServerUrl + 'especialidad')
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getEspecialidad(id: number): Observable<Especialidad> {
    return this.http
      .get<Especialidad>(this.ServerUrl + 'especialidad/' + id)
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getMedicos(): Observable<User> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUserValue.access_token
      );
    }
    return this.http
      .get<User>(this.ServerUrl + 'usuario/getMedicos', { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
