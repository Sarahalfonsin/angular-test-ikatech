import { Injectable } from "@angular/core";
import{ HttpClient
} from '@angular/common/http';
@Injectable({
	providedIn: 'root',
})
export class productoService {

  constructor(private httpClient: HttpClient) {

  }

  getProductos(){
    return this.httpClient.get('http://localhost:8080/productos');

  }
}
