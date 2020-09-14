import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IOSComponent } from './ios/ios.component';
import { ANDROIDComponent } from './android/android.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [



  {
    path: 'ios',
    component: IOSComponent

  },

  {
    path: 'android',
    component: ANDROIDComponent

  },

  {
    path: 'categoties',
    component: CategoriesComponent

  },

  {
    path: 'products',
    component: ProductsComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
