import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  /* Rutas no Dinamicas */
  @Get()
  getHello(): string {
    return 'Hola Categories';
  }

  @Post()
  created(@Body() payload: any) {
    return {
      message: 'Categoria creada',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `La categoría con el id ${id} fue actualizado`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `La categoría con el id ${id} fue eliminada`,
    };
  }

  /* Rutas Dinámicas */

  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return { message: `product ${productId} and ${id}` };
  }
}
