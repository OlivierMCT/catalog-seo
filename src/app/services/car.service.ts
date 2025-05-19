import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Car, CarInfo, Category } from "../models/car.model";

@Injectable( { providedIn: 'root' } )
export class CarService {
    private _categories: Category[] = [
        { categoryId: 1, label: 'Berline', color: 'orange' },
        { categoryId: 2, label: 'SUV', color: 'lime' },
        { categoryId: 3, label: 'Citadine', color: 'fuchsia' },
        { categoryId: 4, label: 'Compacte', color: 'cyan' }
    ];

    private _cars: Car[] = [
        { carId: 1, category: this._categories[0],  brand: 'Volkswagen', model: 'Passat', price: 41398, picture: 'passat.jpg' },
        { carId: 2, category: this._categories[0],  brand: 'Audi', model: 'A6', price: 56428, picture: 'a6.jpg' },
        { carId: 3, category: this._categories[0],  brand: 'Skoda', model: 'Superb', price: 38808, picture: 'superb.jpg' },
        { carId: 4, category: this._categories[0],  brand: 'Peugeot', model: '508', price: 33538, picture: '508.jpg' },
        { carId: 5, category: this._categories[1],  brand: 'Volkswagen', model: 'Touareg', price: 61118, picture: 'touareg.jpg' },
        { carId: 6, category: this._categories[1],  brand: 'Audi', model: 'Q5', price: 53712, picture: 'q5.jpg' },
        { carId: 7, category: this._categories[1],  brand: 'Kia', model: 'Sportage', price: 27334, picture: 'sportage.jpg' },
        { carId: 8, category: this._categories[1],  brand: 'Dacia', model: 'Duster', price: 18427, picture: 'duster.jpg' },
        { carId: 9, category: this._categories[1],  brand: 'Ford', model: 'Kuga', price: 30268, picture: 'kuga.jpg' },
        { carId: 10, category: this._categories[2], brand: 'Renault', model: 'Twingo', price: 10795, picture: 'twingo.jpg' },
        { carId: 11, category: this._categories[2], brand: 'Peugeot', model: '108', price: 15060, picture: '108.jpg' },
        { carId: 12, category: this._categories[2], brand: 'Volkswagen', model: 'Up!', price: 25824, picture: 'up.jpg' },
        { carId: 13, category: this._categories[3], brand: 'Volkswagen', model: 'Golf', price: 35626, picture: 'golf.jpg' },
        { carId: 14, category: this._categories[3], brand: 'Peugeot', model: '308', price: 30008, picture: '308.jpg' },
        { carId: 15, category: this._categories[3], brand: 'Renault', model: 'Mégane', price: 18918, picture: 'megane.jpg' },
        { carId: 16, category: this._categories[3], brand: 'Alfa Romeo', model: 'Giuletta', price: 27135, picture: 'giuletta.jpg' }
    ];

    constructor() { }

    public getAllCategories(): Observable<Category[]> {
      return of(this._categories);
    }

    public getCarsByCategory(categoryId: number): Observable<CarInfo[]> {
      return of(
          this._cars
            .filter(v => v.category.categoryId === categoryId)
            .map(v => ({ carId: v.carId, picture: v.picture }))
        );
    }

    public getAllCars(): Observable<CarInfo[]> {
      return of(
          this._cars
            .map(v => ({ carId: v.carId, picture: v.picture }))
        );
    }

    public getCar(carId: number): Observable<Car | undefined> {
      return of(this._cars.find(v => v.carId === carId));
    }
}
