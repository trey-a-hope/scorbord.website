//Imported Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Views
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AdminComponent } from './views/admin/admin.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';

//Services
import { ProductsService } from './services/products.service';
import { EmailService } from './services/email.service';
import { SharedService } from './services/shared.service';
import { CookieService } from './services/cookie.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    PageNotFoundComponent,
    AdminComponent,
    ProductDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ProductsService,
    EmailService,
    SharedService,
    CookieService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
