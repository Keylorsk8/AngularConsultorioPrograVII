import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notificacion: NotificacionService
  ) { }

  ngOnInit() {
    let registrado = false;

    this.route.queryParams.subscribe(params => {
      registrado = params.medico || false;
    });

    if ( registrado ) {
      this.notificacion.msjSuccess('Médico Registrado', 'Médico registrado correctamente');
    }
  }

}
