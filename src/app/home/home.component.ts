import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Pour ngModel
import { ProductsService } from '../products.service'; // Service des produits
import { Product } from '../products.model';  // Modèle de produit

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import des modules nécessaires
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];  // Tous les produits
  filteredProducts: Product[] = [];  // Produits après recherche et tri
  searchTerm: string = '';  // Terme de recherche

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Charger les produits depuis le service
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.filteredProducts = [...this.products];  // Initialise la liste filtrée
    });
  }

  // Tri des produits par prix
  sortProducts(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const order = selectElement.value;
  
    if (order === 'ascending') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'descending') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  // Filtrer les produits par nom
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
