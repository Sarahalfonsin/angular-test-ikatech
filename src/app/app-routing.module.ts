import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './enum/routes-enum';

const routes: Routes = [
  {
    path:RoutesEnum.HOME,
    runGuardsAndResolvers:'always',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },

  {
  path: RoutesEnum.PRODUCTOS,
  runGuardsAndResolvers: 'always',
  loadChildren: () => import('./pages/producto-page/producto-page.module').then(m => m.ProductoPageModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
