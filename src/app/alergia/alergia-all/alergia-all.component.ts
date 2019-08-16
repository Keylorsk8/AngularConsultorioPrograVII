import { Component, OnInit } from '@angular/core';
import { Alergia } from 'src/app/share/models/alergia';
import { AlergiaEntidad } from 'src/app/share/models/alergia-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { AlergiaService } from 'src/app/share/alergia.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

@Component({
  selector: 'app-alergia-all',
  templateUrl: './alergia-all.component.html',
  styleUrls: ['./alergia-all.component.css']
})
export class AlergiaAllComponent implements OnInit {
  datos: Alergia;
  alergias: AlergiaEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alergiaService: AlergiaService,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {
    let notifC = false;
    let notifM = false;
    let notifD = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.create || false;
      notifM = params.update || false;
      notifD = params.delete || false;
    });

    if (notifC) {
      this.notificacion.msjSuccess('Alergia Creada!', 'Crear Alergia');
    }

    if (notifM) {
      this.notificacion.msjSuccess(
        'Alergia actualizado!',
        'Actualizar Alergia'
      );
    }

    if (notifD) {
      this.notificacion.msjSuccess('Alergia Eliminada!', 'Eliminar Alergia');
    }
    // suscripción para uso del servicio
    this.alergiaService
      .getAlergiasAll()
      .subscribe(
        (respuesta: Alergia) => (this.datos = respuesta),
        error => (this.error = error)
      );
  }
  linkEditar(id: number) {
    this.router.navigate(['/alergia/update/', id], { relativeTo: this.route });
  }
  linkEliminar(id: number) {
    this.alergiaService
      .eliminarAlergia(id)
      .subscribe(
        () => console.log('Alergia Eliminada' + id),
        error => (this.error = error)
      );
    this.ngOnInit();
    this.notificacion.msjSuccess('', 'Alergia Eliminada correctamente');
  }

  obtenerImagen(rutaImagen: string) {
    return this.alergiaService.obtenerImagen(rutaImagen);
  }

  consultarImagen(rutaImagen: string) {
    const img = this.alergiaService.obtenerImagen(rutaImagen);
    if ( img != null ) {
      return true;
    } else {
      return false;
    }
  }

  imagenDefault() {
    return this.alergiaService.obtenerImagen('na.png');
  }
}
