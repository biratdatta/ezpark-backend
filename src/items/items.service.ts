import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private items = [
    {
      id: 1,
      title: 'BTM LAYOUT',
      placeName: 'BT LAYOUT Park',
      placeNumber: 'P001',
      imageUrl: 'http://localhost:3001/public/images/BTM.jpeg',
    },
    {
      id: 2,
      title: 'HSR Layout',
      placeName: 'HSR Layout',
      placeNumber: 'P002',
      imageUrl: 'http://localhost:3001/public/images/HSR.jpeg',
    },
    {
      id: 3,
      title: 'Cubbon Park',
      placeName: 'Cubbon Park',
      placeNumber: 'P003',
      imageUrl: 'http://localhost:3001/public/images/cubbonpark.jpeg',
    },
    {
      id: 4,
      title: 'Indranagar',
      placeName: 'Indranagar',
      placeNumber: 'P004',
      imageUrl: 'http://localhost:3001/public/images/Indranagar.jpeg',
    },
    {
      id: 5,
      title: 'Jayanagar',
      placeName: 'Jayangar',
      placeNumber: 'P001',
      imageUrl: 'http://localhost:3001/public/images/Jayanagar.jpeg',
    },
    {
      id: 6,
      title: 'Kormangala',
      placeName: 'Kormangala SPOT',
      placeNumber: 'P002',
      imageUrl: 'http://localhost:3001/public/images/Kormangla.jpeg',
    },
    {
      id: 7,
      title: 'Sarjapur',
      placeName: 'Sarjapur',
      placeNumber: 'P003',
      imageUrl: 'http://localhost:3001/public/images/Sarjapur.jpeg',
    },
    {
      id: 8,
      title: 'Lalbagh - Spot B',
      placeName: 'Lalbagh Botanical Garden',
      placeNumber: 'P004',
      imageUrl: 'http://localhost:3001/public/images/maps.jpeg',
    },
     {
      id: 9,
      title: 'NS PALYA',
      placeName: 'Kormangala SPOT',
      placeNumber: 'P002',
      imageUrl: 'http://localhost:3001/public/images/Kormangla.jpeg',
    },
    {
      id: 10,
      title: 'Sarjapur',
      placeName: 'Sarjapur',
      placeNumber: 'P003',
      imageUrl: 'http://localhost:3001/public/images/Sarjapur.jpeg',
    },
  ];

  findAll() {
    return this.items;
  }
}