import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];  // Stocker tous les produits

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Récupérer tous les produits depuis le service
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;  // Assignation des produits récupérés à la variable products
    }, error => {
      console.error('Erreur lors du chargement des produits :', error);  // En cas d'erreur
    });
  }
}