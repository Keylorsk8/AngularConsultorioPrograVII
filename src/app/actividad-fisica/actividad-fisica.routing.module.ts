import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadFisicaAllComponent } from './actividad-fisica-all/actividad-fisica-all.component';
import { AuthGuard } from '../share/helpers/auth.guard';

const routes: Routes = [
  {
    path: 'actividadM',
    component: ActividadFisicaAllComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule {}
