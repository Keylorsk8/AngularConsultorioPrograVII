import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicosComponent } from './medicos/medicos.component';


@NgModule({
  declarations: [CreateMedicoComponent, MedicosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule { }
