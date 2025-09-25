export interface Product {
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}
export interface ProductResponse {
  products: Product[]; 
  total: number;
  skip: number;
  limit: number;
}