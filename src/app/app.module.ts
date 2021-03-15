import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import{ ProductService } from 'src/app/service/product.service';
import { ProductEditorComponent } from './page/product-editor/product-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NavComponent,
    ProductEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
