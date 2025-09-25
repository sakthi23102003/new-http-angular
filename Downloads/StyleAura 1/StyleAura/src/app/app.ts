import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import { OurproductsComponent } from './ourproducts/ourproducts';
import { ProductDetails } from './product-details';
import { CommonModule } from '@angular/common';
import Home from './home/home';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer,OurproductsComponent, CommonModule, Home, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
