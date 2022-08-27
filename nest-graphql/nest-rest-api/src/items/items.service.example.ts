import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '2839jsdj29202-sjsld',
      name: 'HP Spectra',
      qty: 50,
      desc: 'A durable HP Laptop',
    },
    {
      id: '2839jsdj29202-',
      name: 'Lenovo',
      qty: 50,
      desc: 'A durable HP Laptop',
    },
    {
      id: '230949847',
      name: 'HP ProBook',
      qty: 50,
      desc: 'A durable HP Laptop',
    },
    {
      id: '2153176911',
      name: 'HP EliteBook',
      qty: 10,
      desc: '265GB ssd 16GB ram backlight core i7',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
