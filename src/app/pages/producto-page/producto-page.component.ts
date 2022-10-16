import { Component, OnInit } from '@angular/core';
import { IZapato, zapatos } from 'src/app/models/IZapato.model';
import { buyBagService } from 'src/app/services/buyBag/buyBag.service';

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrls: ['./producto-page.component.scss'],
})
export class ProductoPageComponent implements OnInit {
  fotoSeleccionada: string;
  indiceSeleccionado = 0;
  yaExiste: boolean;
  producto = zapatos;
  productoR: IZapato[];
  productReco: IZapato[];
  itembuy: number = 0;
 
  constructor(private buyBag: buyBagService) {}
  ngOnInit(): void {
    this.productoR = this.producto.filter(
      (producto) => producto.id > 5 && producto.id < 12
    );
    console.log(this.productoR);
    this.productReco = this.producto.filter(
      (producto) => producto.id > 5 && producto.id < 10
    );
  }
  addShopping() {
    this.itembuy += 1;
    this.buyBag.emitChange(this.itembuy);
  }
}
