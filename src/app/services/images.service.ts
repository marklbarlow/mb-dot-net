import { Injectable } from '@angular/core';
import { ImageCollection } from './image-collection.interface';

@Injectable()
export class ImagesService {

  constructor() {
  }

  public getImages(): ImageCollection {
    return {
      month: 'January',
      images: [
        { dayOfMonth: '1st', prompt: 'Happy New Year', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '2nd', prompt: 'One Word', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '3rd', prompt: 'Contemplate', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '4th', prompt: 'Overlooked', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '5th', prompt: 'Smile', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '6th', prompt: 'Where I Stand', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '7th', prompt: 'Minty White', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '8th', prompt: 'Get In The Picture', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '9th', prompt: 'Game', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '10th', prompt: 'Print', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '11th', prompt: 'Steaming', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '12th', prompt: 'Icey Bokeh', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '13th', prompt: 'Currently Loving', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
        { dayOfMonth: '14th', prompt: 'Inviting', url: 'http://statusmania.at.ua/_pu/3/89264454.jpg' },
      ],
    };
  }
}