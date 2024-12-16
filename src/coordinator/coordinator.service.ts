import { Injectable } from '@nestjs/common';
import { BasketService } from '../basket/basket.service';
import { TavilyService } from '../tavily/tavily.service';

@Injectable()
export class CoordinatorService {
  constructor(
    private readonly basketService: BasketService,
    private readonly tavilyService: TavilyService,
  ) {}

  async handleUserQuery(query: string): Promise<string> {
    const lowerQuery = query.toLowerCase();

    if (
      lowerQuery.includes('ajouter') ||
      lowerQuery.includes('ajoute') ||
      lowerQuery.includes('ajoute-le')
    ) {
      const product = {
        id: this.basketService.getNextId(),
        name: 'Sapin de Noël',
        url: 'https://www.ikea.com/fr/fr/p/abies-nordmanniana-sapin-de-noel-80045882/',
      };
      this.basketService.addProduct(product);
      return `Le produit Sapin de Noël artificiel a été ajouté au panier depuis Ikea : ${product.url}`;
    }

    if (lowerQuery.includes('supprimer') || lowerQuery.includes('enlever')) {
      const productId = '123'; // Pas trouvé de moyen de récupérer l'id du produit à supprimer via un input text utilisateur random (Peut être un id de produit en dur ou une regex)
      return this.basketService.removeProduct(productId);
    }

    if (lowerQuery.includes('rechercher') || lowerQuery.includes('chercher')) {
      const result = await this.tavilyService.searchProduct(query);
      return result;
    }

    if (
      lowerQuery.includes('panier') ||
      lowerQuery.includes('affiche') ||
      lowerQuery.includes('afficher')
    ) {
      return this.basketService.listProducts();
    }

    return 'Requête non comprise';
  }
}
