import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfermedadAllComponent } from './enfermedad-all/enfermedad-all.component';
import { AuthGuard } from '../share/helpers/auth.guard';

const routes: Routes = [
  {
    path: 'enfermedadM',
    component: EnfermedadAllComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnfermedadRoutingModule { }
