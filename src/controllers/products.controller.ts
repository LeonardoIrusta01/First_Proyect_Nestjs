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
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  /* Rutas no Dinamicas */

  /* Forma mas sencilla de manipular las Query */
  @Get()
  getProducts(
    @Query('limit') limit = 100, // No se hace falta especificar el valor del caractar al ya poner un valor especifico.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return { message: `yo soy un filter` };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `El producto con el id ${id} fue actualizado`,
      payload,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: number) {
    return {
      message: `El producto con el id ${id} fue eliminada`,
    };
  }

  /* Rutas Dinámicas */

  /*  Forma mas sencilla de recibirlo */
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    return { message: `product ${productId}` };
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
