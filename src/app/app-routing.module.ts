import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroFormComponent } from './page/hero-form/hero-form.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:' ',
    component: HomeComponent,
  },
  {
    path:'products',
    component: ProductComponent,
  },
  {
    path:'products/:idOrName',
    component: ProductEditorComponent,
  },
  {
    path:'hero-form',
    component: HeroFormComponent,
  },
  {
    path:'**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
