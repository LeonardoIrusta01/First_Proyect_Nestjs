import { Injectable } from '@nestjs/common';

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'djfllkdfnad',
      price: 232,
      stock: 32131,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const productfind = this.products.findIndex((item) => item.id === id);

    if (productfind > 0) {
      this.products[productfind] = {
        id: id,
        ...payload,
      };
      return 'Product update';
    } else {
      return 'Product not found';
    }
  }

  delete(id: number) {
    const productfilter = this.products.filter((item) => item.id !== id);

    if (productfilter.length > 0) {
      this.products = productfilter;
      return 'Product deleted';
    } else {
      return 'Product not found';
    }
  }
}
