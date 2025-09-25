import { Routes } from '@angular/router';
import Home from './home/home';
import About from './about/about';
import { OurproductsComponent } from './ourproducts/ourproducts';
import {ContactformComponent} from './contactform/contactform';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'ourproducts', component: OurproductsComponent },
  { path: 'contactform', component: ContactformComponent },
  { path: '**', redirectTo: '' }
];
