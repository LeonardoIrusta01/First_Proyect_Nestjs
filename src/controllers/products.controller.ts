import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  /* Rutas no Dinamicas */

  /* Forma mas sencilla de manipular las Query */
  @Get()
  getProducts(
    @Query('limit') limit = 100, // No se hace falta especificar el valor del caractar al ya poner un valor especifico.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    // };
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return { message: `yo soy un filter` };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }

  /* Rutas Dinámicas */

  /*  Forma mas sencilla de recibirlo */
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }

  /* Forma de implementar la respuesta con Express
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({ message: `product ${productId}` })
    // return { message: `product ${productId}` };
  }
  */
}
