import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';
import { Subscription } from 'rxjs';
import { IZapato, zapatos } from 'src/app/models/IZapato.model';
import { buyBagService } from 'src/app/services/buyBag/buyBag.service';
import { productoService } from 'src/app/services/buyBag/producto.service';

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrls: ['./producto-page.component.scss'],
})
export class ProductoPageComponent implements OnInit {
private readonly productoServiceSubscription: Subscription[]= [];

  fotoSeleccionada: string;
  indiceSeleccionado = 0;
  yaExiste: boolean;
  producto
  productoR: IZapato[];
  productReco: IZapato[];
  itembuy: number = 0;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private buyBag: buyBagService, private productoService: productoService) {}
  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: 'auto',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      {
        breakpoint: 400,
        preview: false,
      },
    ];



    this.initialize();
  }
  initialize() {
    this.initProducts();
  }
  initProducts(){
    this.productoServiceSubscription.push(
      this.productoService.getProductos()
      .subscribe({
        next: productoResult => {
          console.log(productoResult);
          this.producto= productoResult;
          this.productoR = this.producto.filter(
            (producto) => producto.id > 5 && producto.id < 12
          );
          this.productReco = this.producto.filter(
            (producto) => producto.id > 5 && producto.id < 10
          );
          this.imagesChargue();
        }
      }
      ),
    );
  }
  imagesChargue() {
    let test;
    let array: [{}] = [{}];
    test = this.productoR?.forEach((e, i) => {
      let min = {
        small: '../../../assets/img/' + e.foto,
        medium: '../../../assets/img/' + e.foto,
        big: '../../../assets/img/' + e.foto,
      };
      array.push(min);
    });

    array.map((e) => {
      this.galleryImages.push(e);
    });
    this.galleryImages.splice(0, 1);

  }
  addShopping() {
    this.itembuy += 1;
    this.buyBag.emitChange(this.itembuy);
  }
}
