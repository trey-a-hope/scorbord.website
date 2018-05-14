//Imported Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

//Views
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';

//Services
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
