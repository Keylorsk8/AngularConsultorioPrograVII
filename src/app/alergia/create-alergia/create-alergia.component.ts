import { Component, OnInit, DoCheck } from '@angular/core';
import { Alergia } from 'src/app/share/models/alergia';
import { Router } from '@angular/router';
import { AlergiaService } from 'src/app/share/alergia.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { AlergiaEntidad } from 'src/app/share/models/alergia-entidad';
import { stringify } from '@angular/compiler/src/util';
export interface ErrorEntidad {
  errors: { field: string; message: string }[];
}

@Component({
  selector: 'app-create-alergia',
  templateUrl: './create-alergia.component.html',
  styleUrls: ['./create-alergia.component.css']
})
export class CreateAlergiaComponent implements OnInit, DoCheck {
  datos: Alergia;
  error: any;
  selectedImage: File = null;
  image: File;
  link: string;
  urlImagen = 'http://127.0.0.1:8000/i';
  constructor(
    private router: Router,
    private alergiaService: AlergiaService,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {}
  ngDoCheck() {}
  onSubmit(obj: AlergiaEntidad) {
      return this.alergiaService.createAlergia(obj).subscribe(
        (respuesta: Alergia) => {
          this.datos = respuesta;
          this.SubirImagen(this.datos.Alergias[0].id);
          this.router.navigate(['/alergiaM/lista'], {
            queryParams: { create: 'true' }
          });
        },
        error => {
          this.error = error;
          this.notificacion.msjValidacion(this.error);
        }
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

  onSelectImage(event) {
    this.selectedImage = event.target.files[0] as File;
  }
}
