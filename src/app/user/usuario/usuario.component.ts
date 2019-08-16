import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notificacion: NotificacionService
    ) {}

  ngOnInit() {
    let registrado = false;

    // Mensajes
    this.route.queryParams.subscribe(params => {
      registrado = params.registrado || false;
    });

    if ( registrado ) {
      this.notificacion.msjSuccess('Usuario Registrado', 'Usuario registrado correctamente');
    }
  }
}
