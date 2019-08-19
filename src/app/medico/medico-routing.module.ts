import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../share/helpers/auth.guard';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { AdminGuard } from '../share/helpers/admin.guard';
import { MedicosComponent } from './medicos/medicos.component';


const routes: Routes = [
  {
    path: 'medicoM',
    component: MedicosComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'crear',
    component: CreateMedicoComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
