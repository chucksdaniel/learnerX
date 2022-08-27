import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  //Dependancy injection
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     console.log(req.url);

  //     return res.send('Hello! this is a findAll route');
  //     //  return 'Find all Item'
  //   }

  @Get(':id')
  findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id);
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  // Another way of passing param
  @Put(':id')
  editItem(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    //  return `Edit item with ID of ${id} with name: ${updateItemDto.name}, desc: ${updateItemDto.desc}`;
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  delete(@Param() param): Promise<Item> {
    //  return `Deleted item with ID of ${param.id}`;
    return this.itemsService.delete(param.id);
  }
}
