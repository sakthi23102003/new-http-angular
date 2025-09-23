import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export default class Home implements OnInit {
  currentSlide = 0;

  slides = [
    'assets/images/homebanner/purchase-sale-discount-fashion-style.jpg',
    'assets/images/homebanner/ian-schneider-TamMbr4okv4-unsplash.jpg',
    'assets/images/homebanner/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg',
    'assets/images/homebanner/the-blowup-Rmjq07KI20U-unsplash.jpg'
  ];

  ngOnInit() {
    // Automatic slider every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  // Slider functions
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  // Newsletter subscription
  subscribeNewsletter(event: Event) {
    event.preventDefault();
    alert('✅ Thank you for subscribing to our newsletter!');
  }

  reviews = [
  { name: 'Anita Sharma', text: 'Amazing quality and fast delivery!', rating: 5 },
  { name: 'Ravi Kumar', text: 'I love the waterproof jacket I bought.', rating: 4 },
  { name: 'Sneha Reddy', text: 'Customer service was very helpful.', rating: 4 },
  { name: 'Karthik V.', text: 'The convertible saree is fantastic!', rating: 5 },
  { name: 'Priya Singh', text: 'Great products at reasonable prices.', rating: 4 }
];

}
