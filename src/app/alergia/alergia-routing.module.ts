import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlergiaIndexComponent } from './alergia-index/alergia-index.component';
import { AlergiaShowComponent } from './alergia-show/alergia-show.component';
import { CreateAlergiaComponent } from './create-alergia/create-alergia.component';
import { UpdateAlergiaComponent } from './update-alergia/update-alergia.component';
import { AlergiaAllComponent } from './alergia-all/alergia-all.component';
import { AuthGuard } from '../share/helpers/auth.guard';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { AdminGuard } from '../share/helpers/admin.guard';
import { RestoreAlergiaComponent } from './restore-alergia/restore-alergia.component';

const routes: Routes = [
  {
    path: 'alergia', component: AlergiaIndexComponent
  },
  {
    path: 'alergia/update/:id',
    component: UpdateAlergiaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alergia/:id', component: AlergiaShowComponent
  },
  {
    path: 'alergiaM',
    component: MantenimientoComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: 'lista',
        component: AlergiaAllComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'create',
        component: CreateAlergiaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'restore',
        component: RestoreAlergiaComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlergiaRoutingModule {}
