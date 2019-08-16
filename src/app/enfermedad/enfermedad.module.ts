import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnfermedadRoutingModule } from './enfermedad-routing.module';
import { EnfermedadAllComponent } from './enfermedad-all/enfermedad-all.component';

@NgModule({
  declarations: [
    EnfermedadAllComponent
  ],
  imports: [
    CommonModule,
    EnfermedadRoutingModule
  ]
})
export class EnfermedadModule { }
