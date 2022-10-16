import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoPageComponent } from './producto-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoPageComponent,
    runGuardsAndResolvers: 'always',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoPageRoutingModule { }
