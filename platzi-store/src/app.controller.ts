import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/product/:productId')
  getProduct(@Param() params): string {
    return `nuevo endpoint ${params.productId}`;
  }
  // todas las rutas que no sean dinamicas al inicio
  @Get('/product/filter')
  getProductFilter(): string {
    return `ruta filter`;
  }
  @Get('/product/:productId')
  getProductParam(@Param('productId') productId: string): string {
    return `nuevo endpoint ${productId}`;
  }

  @Get('/cateogries/:categoryId/product/:productId')
  getProductV2(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): string {
    return `nuevo endpoint ${productId} - ${categoryId}`;
  }

  @Get('products-page-v1')
  getProductsPagesV1(@Query() params) {
    const { limit, offset, brand } = params;
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('products-page')
  getProductsPages(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
