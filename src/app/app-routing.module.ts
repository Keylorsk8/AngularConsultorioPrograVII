import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: './user/user.module#UserModule'
    // loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },
  {
    path: 'medico',
    // loadChildren: './medico/user.module#UserModule'
    loadChildren: () => import('./medico/medico.module').then(mod => mod.MedicoModule)
  },
  {
    path: 'alergia',
    // loadChildren: "./alergia/alergia.module#alergiaModule"
    loadChildren: () =>
      import('./alergia/alergia.module').then(mod => mod.AlergiaModule)
  },
  {
    path: 'actividad',
    // loadChildren: "./alergia/alergia.module#alergiaModule"
    loadChildren: () =>
      import('./actividad-fisica/actividad-fisica.module').then(mod => mod.ActividadFisicaModule)
  },
  {
    path: 'enfermedad',
    // loadChildren: "./alergia/alergia.module#alergiaModule"
    loadChildren: () =>
      import('./enfermedad/enfermedad.module').then(mod => mod.EnfermedadModule)
  },
  {
    path: 'home',
    // loadChildren: "./home/home.module#HomeModule"
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },

  /* { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
