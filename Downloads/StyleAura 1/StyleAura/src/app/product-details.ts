import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class ProductDetails {
  product: any[] = [
    { name: 'shirt', category: 'Men', price: 1500, rating: 4.5, image: "assets/images/our product/shirt-men.png" },
    { name: 'T-shirt', category: 'Men', price: 800, rating: 3.5, image: "assets/images/our product/t-shirt.png" },
    { name: 'Polo t-shirt', category: 'Men', price: 1000, rating: 3.5, image: "assets/images/our product/polo-tshirt.png" },
    { name: 'Trousers-men', category: 'Men', price: 1500, rating: 4.8, image: "assets/images/our product/trouser-men.png" },
    { name: 'Cargo pants', category: 'Men', price: 1500, rating: 4.9, image: "assets/images/our product/cargo.png" },
    { name: 'Formal-blazer', category: 'Women', price: 3500, rating: 4.9, image: "assets/images/our product/blazer.png" },
    { name: 'Shirt', category: 'Women', price: 500, rating: 3.9, image: "assets/images/our product/shirt-women.png" },
    { name: 'Kurti', category: 'Women', price: 800, rating: 2.9, image: "assets/images/our product/kurti.png" },
    {
      name: 'Trousers-women',
      category: 'Women',
      price: 500,
      rating: 4,
      image: "assets/images/our product/trouser-women.png",
    },
    { name: 'Frock', category: 'Kids', price: 1200, rating: 4.0, image: "assets/images/our product/frock-child.png" },
    { name: 'Coat-suit', category: 'Kids', price: 2500, rating: 4.0, image: "assets/images/our product/coat-suit.png" },
    { name: 'Sweater', category: 'Kids', price: 2030, rating: 3.4, image: "assets/images/our product/sweater.png" },
    { name: 'Jean-trouser', category: 'Kids', price: 250, rating: 4.5, image: "assets/images/our product/trouser-child.png" },
    { name: 'Shocks', category: 'Kids', price: 500, rating: 4.8, image: "assets/images/our product/shocks.png" },
    { name: 'Over-coat', category: 'New-arrival', price: 1800, image: "assets/images/our product/over-coar.png" },
    {
      name: 'Wet-proof-shirt',
      category: 'New-arrival',
      price: 800,
      rating: 0,
      image: "assets/images/our product/wet-proof.png",
    },
    {
      name: 'Drapped in seconds saree',
      category: 'New-arrival',
      price: 800,
      rating: 0,
      image: "assets/images/our product/easy-drap-saree.png",
    },
    { name: 'Kota Kurti', category: 'New-arrival', price: 800, rating: 0, image: "assets/images/our product/kota-kurti.png" },
    {
      name: 'Embroidery-shirt',
      category: 'New-arrival',
      price: 800,
      rating: 0,
      image: "assets/images/our product/embroidery-shirt.png",
    },
  ];
}
 
 
