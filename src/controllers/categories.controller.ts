import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  /* Rutas no Dinamicas */
  @Get()
  getHello(): string {
    return 'Hola Categories';
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  created(@Body() payload: any) {
    return {
      message: 'Categoria creada',
      payload,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `La categoría con el id ${id} fue actualizado`,
      payload,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: number) {
    return {
      message: `La categoría con el id ${id} fue eliminada`,
    };
  }

  /* Rutas Dinámicas */

  @Get(':id/products/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return { message: `product ${productId} and ${id}` };
  }
}
