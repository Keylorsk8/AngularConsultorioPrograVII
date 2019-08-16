import { Component, OnInit } from '@angular/core';
import { Enfermedad } from 'src/app/share/models/enfermedad';
import { EnfermedadEntidad } from 'src/app/share/models/enfermedad-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { EnfermedadService } from 'src/app/share/enfermedad.service';

@Component({
  selector: 'app-enfermedad-all',
  templateUrl: './enfermedad-all.component.html',
  styleUrls: ['./enfermedad-all.component.css']
})
export class EnfermedadAllComponent implements OnInit {
  datos: Enfermedad;
  alergias: EnfermedadEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enfermedadService: EnfermedadService,
    private notificacion: NotificacionService
  ) { }

  ngOnInit() {
    this.enfermedadService
      .getEnfermedades()
      .subscribe(
        (respuesta: Enfermedad) => (this.datos = respuesta),
        error => (this.error = error)
      );
  }

  obtenerImagen(rutaImagen: string) {
    return this.enfermedadService.obtenerImagen(rutaImagen);
  }

  imagenDefault() {
    return this.enfermedadService.obtenerImagen('na.png');
  }

}
