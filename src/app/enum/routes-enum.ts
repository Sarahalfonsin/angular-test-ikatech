export enum RoutesEnum {
  DIRECTORIO_TIENDAS = 'directorio-tiendas',
  SERVICIO_CLIENTE = 'servicio-cliente',
  MI_CUENTA = 'mi-cuenta',
  HOMBRE = 'hombre',
  MUJER = 'mujer',
  BLOG = 'blog',
  HISTORIA = 'historia',
  TIENDAS = 'tiendas',
  PRODUCTOS = 'productos',
  HOME=''
}

export class RoutesTitle {
  static readonly DIRECTORIO_TIENDAS = $localize`DIRECTORIO DE TIENDAS`;
  static readonly SERVICIO_CLIENTE = $localize`SERVICIO AL CLIENTE`;
  static readonly MI_CUENTA = $localize`MI CUENTA`;
  static readonly HOMBRE = $localize`HOMBRE`;
  static readonly MUJER = $localize`MUJER`;
  static readonly BLOG = $localize`BLOG`;
  static readonly HISTORIA = $localize`HISTORIA`;
  static readonly TIENDAS = $localize`TIENDAS`;
  static readonly PRODUCTOS = $localize`PRODUCTOS`;
  static readonly HOME = $localize`HOME`;
}
