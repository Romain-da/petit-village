import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';  // Utilise `provideHttpClient` pour les standalone components
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';


const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Utilise `provideHttpClient` pour fournir HttpClient
    provideRouter(routes)  // Si tu utilises le routage
  ]
}).catch(err => console.error(err));
