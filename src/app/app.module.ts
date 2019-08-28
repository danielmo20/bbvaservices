import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ComicGetComponent } from './marvel-get/comics-get.component';


//Services
import { ProductsService } from './products.service';
<<<<<<< HEAD
import { MarvelService } from './marvel.service';

@NgModule({
    declarations: [
        AppComponent,
        ProductAddComponent,
        ProductGetComponent,
        ProductEditComponent,
        ComicGetComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SlimLoadingBarModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [ProductsService, MarvelService],
    bootstrap: [AppComponent]
=======
import { ProductBbvaComponent } from './product-bbva/product-bbva.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    ProductBbvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	SlimLoadingBarModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
>>>>>>> 044aa6517a9c7e29d77a661a89f9680a5bd31082
})
export class AppModule { }
