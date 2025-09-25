import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-ourproducts',
  imports: [CommonModule],
  templateUrl: './ourproducts.html',
  standalone: true,
  styleUrl: './ourproducts.css',
})
export class OurproductsComponent implements OnInit {
  filteredProducts: any[] = [];
  selectedCategory: any[] = [];
  constructor(private pdservice: ProductDetails) {}
  ngOnInit(): void {
    this.pdservice.getProducts().subscribe((dataa) => {
    this.filteredProducts = dataa.products;
    this.selectedCategory = dataa.products;
    });
}
  filterProducts(category: String) {
    if (category === 'all') {
      this.filteredProducts = this.selectedCategory;
    } else if (category === 'Best Seller') {
      this.filteredProducts = this.selectedCategory.filter((p) => p.rating > 4);
    } else {
      this.filteredProducts = this.selectedCategory.filter((p) => p.category === category);
    }
  }
}
 
 