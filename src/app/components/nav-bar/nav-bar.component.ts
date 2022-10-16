import { Component, Input, OnInit, Output } from '@angular/core';
import { RoutesEnum, RoutesTitle } from 'src/app/enum/routes-enum';
import { MenuItem } from 'src/app/models/menu.items';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];
  itemsNav:MenuItem[] = [];

  @Input()
  first:Boolean =false;

  @Input()
  second:Boolean = false;

  @Input()
  buy:number

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: $localize`:@@directorio: DIRECTORIO DE TIENDAS`,
        items: [
          {
            label: RoutesTitle.DIRECTORIO_TIENDAS,
            routerLink: [RoutesEnum.DIRECTORIO_TIENDAS],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          },
        ],
      },
      {
        label: $localize`:@@servicio: SERVICIO AL CLIENTE`,
        items: [
          {
            label: RoutesTitle.SERVICIO_CLIENTE,
            routerLink: [RoutesEnum.SERVICIO_CLIENTE],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          }
        ]
      },
      {
        label: $localize`:@@miCuenta: MI CUENTA`,
        items: [
          {
            label: RoutesTitle.MI_CUENTA,
            routerLink: [RoutesEnum.MI_CUENTA],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          }
        ]
      }
    ];
    this.itemsNav =[
      {
        label: $localize`:@@hombre: HOMBRE`,
        items: [
          {
            label: RoutesTitle.HOMBRE,
            routerLink: [RoutesEnum.HOMBRE],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          }
        ]
      },
      {
        label: $localize`:@@mujer: MUJER`,
        items: [
          {
            label: RoutesTitle.MUJER,
            routerLink: [RoutesEnum.MUJER],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          }
        ]
      },
      {
        label: $localize`:@@blog: BLOG`,
        items: [
          {
            label: RoutesTitle.BLOG,
            routerLink: [RoutesEnum.BLOG],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          }
        ]
      },
      {
        label: $localize`:@@historia: HISTORIA`,
        items: [
          {
            label: RoutesTitle.HISTORIA,
            routerLink: [RoutesEnum.HISTORIA],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          }
        ]
      },
      {
        label: $localize`:@@tiendas: TIENDAS`,
        items: [
          {
            label: RoutesTitle.TIENDAS,
            routerLink: [RoutesEnum.TIENDAS],
            routerLinkActiveOptions: { exact: true },
            visible: true,
          }
        ]
      },

    ]
}
}
