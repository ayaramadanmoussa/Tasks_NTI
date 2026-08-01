import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './smart-products.html',
  styleUrl: './smart-products.css',
})
export class SmartProducts {
  isLoggedIn = false;
userName = 'Ahmed';
searchText = '';
status: 'loading' | 'success' | 'error' | 'idle' = 'idle';

products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 250,
    category: 'Accessories',
    inStock: true,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: 1200,
    category: 'Accessories',
    inStock: true,
  },
  {
    id: 3,
    name: 'USB-C Hub',
    price: 600,
    category: 'Accessories',
    inStock: false,
  },
  {
    id: 4,
    name: '27 Monitor',
    price: 4500,
    category: 'Displays',
    inStock: true,
  },
];
login() {
  this.isLoggedIn = true;
}

logout() {
  this.isLoggedIn = false;
}

clearProducts() {
  this.products = [];
}

setStatus(newStatus: 'loading' | 'success' | 'error' | 'idle') {
  this.status = newStatus;
}
get filteredProducts() {
  const q = this.searchText.trim().toLowerCase();

  if (!q) {
    return this.products;
  }

  return this.products.filter(product =>
    product.name.toLowerCase().includes(q)
  );
}
}
