import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';

import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { FooterModule } from './components/footer/footer.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductoPageComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NavBarModule,
    FontAwesomeModule,
    FooterModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatIconModule,
    NgxGalleryModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
