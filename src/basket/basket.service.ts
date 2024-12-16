import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

interface Product {
  id: string;
  name: string;
  url: string;
}

@Injectable()
export class BasketService {
  private readonly BasketFilePath = './data/basket.json';

  getNextId(): string {
    const Basket = this.getBasket();
    return (Basket.length + 1).toString();
  }

  private getBasket(): Product[] {
    if (fs.existsSync(this.BasketFilePath)) {
      const data = fs.readFileSync(this.BasketFilePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  }

  private saveBasket(Basket: Product[]): void {
    fs.writeFileSync(this.BasketFilePath, JSON.stringify(Basket, null, 2));
  }

  addProduct(product: Product): string {
    const Basket = this.getBasket();
    Basket.push(product);
    this.saveBasket(Basket);
    return `Produit ajouté : ${product.name}`;
  }

  removeProduct(productId: string): string {
    const Basket = this.getBasket();
    const updatedBasket = Basket.filter((product) => product.id !== productId);
    this.saveBasket(updatedBasket);
    return `Produit supprimé avec ID : ${productId}`;
  }

  listProducts(): string {
    const Basket = this.getBasket();
    return Basket.length > 0
      ? Basket.map(
          (product) => `id: ${product.id}, ${product.name} (${product.url})`,
        ).join(', ')
      : 'Le Basket est vide';
  }
}
