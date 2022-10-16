import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductoPageRoutingModule } from './producto-page-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    ProductoPageRoutingModule,
  ],
})
export class ProductoPageModule {}
