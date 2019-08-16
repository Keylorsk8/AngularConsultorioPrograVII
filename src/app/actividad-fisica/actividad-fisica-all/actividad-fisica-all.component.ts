import { Component, OnInit } from '@angular/core';
import { ActividadFisica } from 'src/app/share/models/actividad-fisica';
import { ActividadFisicaEntidad } from 'src/app/share/models/actividad-fisica-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadFisicaService } from 'src/app/share/actividad-fisica.service';
import { NotificacionService } from 'src/app/share/notificacion.service';



@Component({
  selector: 'app-actividad-fisica-all',
  templateUrl: './actividad-fisica-all.component.html',
  styleUrls: ['./actividad-fisica-all.component.css']
})
export class ActividadFisicaAllComponent implements OnInit {
  datos: ActividadFisica;
  alergias: ActividadFisicaEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actFisicaService: ActividadFisicaService,
    private notificacion: NotificacionService
  ) { }

  ngOnInit() {
    this.actFisicaService
      .getActividadesFisicas()
      .subscribe(
        (respuesta: ActividadFisica) => (this.datos = respuesta),
        error => (this.error = error)
      );
  }

  obtenerImagen(rutaImagen: string) {
    return this.actFisicaService.obtenerImagen(rutaImagen);
  }

  imagenDefault() {
    return this.actFisicaService.obtenerImagen('na.png');
  }

}
