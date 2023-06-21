import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
