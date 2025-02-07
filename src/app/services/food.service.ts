import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Prato feito',
        price: 20,
        image: 'assets/img/prato-do-dia.jpeg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },
    ];
  }

  getFood(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
