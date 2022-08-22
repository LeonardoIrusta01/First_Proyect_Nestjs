import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  /* Rutas no Dinamicas */
  @Get()
  getHello(): string {
    return 'Hola Categories';
  }
  /* Rutas Dinámicas */

  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
