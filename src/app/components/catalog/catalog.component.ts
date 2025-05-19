import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, map, takeUntil,  } from 'rxjs';
import { CarInfo, Category } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet],
})
export class CatalogComponent {
  public cars$: Observable<CarInfo[]>;

  public constructor(private _carService: CarService) {
    this.cars$ = this._carService.getAllCars().pipe();
  }
}
