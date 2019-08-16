import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CreateAlergiaComponent } from './create-alergia/create-alergia.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { UpdateAlergiaComponent } from './update-alergia/update-alergia.component';
import { AlergiaAllComponent } from './alergia-all/alergia-all.component';
import { AlergiaIndexComponent } from './alergia-index/alergia-index.component';
import { AlergiaShowComponent } from './alergia-show/alergia-show.component';
import { AlergiaRoutingModule } from './alergia-routing.module';
import { RestoreAlergiaComponent } from './restore-alergia/restore-alergia.component';

@NgModule({
  declarations: [
    AlergiaIndexComponent,
    AlergiaShowComponent,
    MantenimientoComponent,
    AlergiaAllComponent,
    CreateAlergiaComponent,
    UpdateAlergiaComponent,
    RestoreAlergiaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AlergiaRoutingModule
  ]
})
export class AlergiaModule {}
