import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  /* Rutas no Dinamicas */
  
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  /* Rutas Dinámicas */
  /*  Forma mas sencilla de recibirlo */
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  /* Forma mas sencilla de manipular las Query */
  @Get()
  getProducts(
    @Query('limit') limit = 100, // No se hace falta especificar el valor del caractar al ya poner un valor especifico.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

}
