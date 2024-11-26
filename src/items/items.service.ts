import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private items = [
    {
      id: 1,
      title: 'Cubbon Park - Spot 1',
      placeName: 'Cubbon Park',
      placeNumber: 'P001',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
    {
      id: 2,
      title: 'Cubbon Park - Spot 2',
      placeName: 'Cubbon Park',
      placeNumber: 'P002',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
    {
      id: 3,
      title: 'Lalbagh - Spot A',
      placeName: 'Lalbagh Botanical Garden',
      placeNumber: 'P003',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
    {
      id: 4,
      title: 'Lalbagh - Spot B',
      placeName: 'Lalbagh Botanical Garden',
      placeNumber: 'P004',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
    {
      id: 5,
      title: 'Cubbon Park - Spot 1',
      placeName: 'Cubbon Park',
      placeNumber: 'P001',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
    {
      id: 6,
      title: 'Cubbon Park - Spot 2',
      placeName: 'Cubbon Park',
      placeNumber: 'P002',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
    {
      id: 7,
      title: 'Lalbagh - Spot A',
      placeName: 'Lalbagh Botanical Garden',
      placeNumber: 'P003',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
    {
      id: 8,
      title: 'Lalbagh - Spot B',
      placeName: 'Lalbagh Botanical Garden',
      placeNumber: 'P004',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
  ];

  findAll() {
    return this.items;
  }
}