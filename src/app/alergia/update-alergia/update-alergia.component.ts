import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlergiaService } from 'src/app/share/alergia.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { AlergiaEntidad } from 'src/app/share/models/alergia-entidad';
import { Alergia } from 'src/app/share/models/alergia';

@Component({
  selector: 'app-update-alergia',
  templateUrl: './update-alergia.component.html',
  styleUrls: ['./update-alergia.component.css']
})
export class UpdateAlergiaComponent implements OnInit, DoCheck {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alergiaService: AlergiaService,
    private notificacion: NotificacionService
  ) {}
  ale: AlergiaEntidad;
  datos: Alergia;
  error: any;
  image: File;
  link: string;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    // suscripción para uso del servicio
    this.alergiaService.getAlergia(id).subscribe(
      (respuesta: Alergia) => {
        this.datos = respuesta;
        this.ale = this.datos.Alergias[0];
      },
      error => (this.error = error)
    );
  }

  ngDoCheck() {}
  onSubmit(obj: AlergiaEntidad) {
    // suscripción para uso del servicio
    return this.alergiaService.updateAlergia(obj.id, obj).subscribe(
      (respuesta: Alergia) => {
        this.datos = respuesta;
        if ( this.image ) {
          this.SubirImagen (this.ale.id);
        }
        this.router.navigate(['/alergiaM/lista'], {
          queryParams: { update: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      },
      () => {}
    );
  }
  onBack() {
    this.router.navigate(['/alergiaM']);
  }

  capturarImagen(event) {
    this.image = event.target.files[0] as File;
  }

  SubirImagen(id: number) {
    try {
      const fd = new FormData();
      if (this.image) {
        fd.append('imagen', this.image);
        /// Agregar a formData todos los valores
        // necesarios para el registro en el API
        return this.alergiaService.guardarFoto(fd, id).subscribe(
          (respuesta: string) => (this.link = respuesta),
          error => {
            this.error = error;
          }
        );
      }
    } catch (error) {
      return '';
    }
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
