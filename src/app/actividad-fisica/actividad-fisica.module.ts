import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadFisicaAllComponent } from './actividad-fisica-all/actividad-fisica-all.component';
import { ActividadRoutingModule } from './actividad-fisica.routing.module';

@NgModule({
  declarations: [
    ActividadFisicaAllComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule
  ]
})
export class ActividadFisicaModule { }
