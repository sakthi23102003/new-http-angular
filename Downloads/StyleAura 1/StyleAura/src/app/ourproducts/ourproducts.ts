import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetails } from '../product-details';
 
@Component({
  selector: 'app-ourproducts',
  imports: [CommonModule],
  providers: [ProductDetails],
  templateUrl: './ourproducts.html',
  standalone: true,
  styleUrl: './ourproducts.css',
})
export class OurproductsComponent implements OnInit {
  filteredProducts: any[] = [];
  selectedCategory: any[] = [];
  constructor(private pdservice: ProductDetails) {}
  ngOnInit(): void {
    this.filteredProducts = this.pdservice.product;
    this.selectedCategory = this.pdservice.product;
  }
  filterProducts(category: String) {
    if (category === 'All') {
      this.filteredProducts = this.pdservice.product;
      console.log(this.pdservice.product);
    } else if (category === 'Best Seller') {
      this.filteredProducts = this.pdservice.product.filter((p) => p.rating > 4);
    } else {
      this.filteredProducts = this.pdservice.product.filter((p) => p.category === category);
    }
  }
}
 
 