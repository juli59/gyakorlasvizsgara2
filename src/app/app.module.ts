import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import{ ProductService } from 'src/app/service/product.service';
import { ProductEditorComponent } from './page/product-editor/product-editor.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { HeroFormComponent } from './page/hero-form/hero-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NavComponent,
    ProductEditorComponent,
    FilterPipe,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
