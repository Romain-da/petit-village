import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

// Définition des routes
export const routes: Routes = [
  { path: '', component: HomeComponent },  // Route pour la page d'accueil
  { path: 'about', component: AboutComponent },  // Route pour la page "About"
  { path: 'products', component: ProductComponent }  // Route pour la page "Products"
];
