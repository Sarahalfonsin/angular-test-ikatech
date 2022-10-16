import { Component } from '@angular/core';
import { buyBagService } from './services/buyBag/buyBag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-ikatech';
  first=true;
  second=true;
  buy = 0;

  constructor(private buyBag: buyBagService) {
    this.buyBag.changeEmitted$.subscribe(
      item => {
        this.buy = item;
      }
    );
  }


}
