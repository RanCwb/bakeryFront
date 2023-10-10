import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

const routes: Routes = [
  {path: '', component: MainComponentComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
