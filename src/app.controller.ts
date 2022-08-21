import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* Rutas no Dinamicas */
  @Get()
  getHello(): string {
    return 'Hola mundo';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo';
  }

  @Get('products/filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  /* Rutas Dinámicas */

  /*  Forma mas sencilla de recibirlo */
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  /* Forma mas sencilla de manipular las Query */
  @Get('products')
  getProducts(
    @Query('limit') limit = 100, // No se hace falta especificar el valor del caractar al ya poner un valor especifico.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
  /* Forma estandar de manejar las query
    @Get('products')
    getProducts(@Query() params: any) {
      const { limit, offset} = params
      return `products: limit => ${limit}, offset => ${offset}`;
    }
    */

  /* Forma estandar de usar los Params
    @Get('products/:id')
    getProduct(@Param() params: any) {
      return `product ${params.id}`;
    }
    */
}
