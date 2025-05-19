import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, Observable, tap } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from '../../models/car.model';
import { AsyncPipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  public car$?: Observable<Car | undefined>;

  public constructor(
    private _carService: CarService,
    private _seoService: SeoService,
    private _route: ActivatedRoute
  ) {
    this._route.params
      .pipe(
        takeUntilDestroyed(),
        map((params: Params) => +params['id']),
      )
      .subscribe((id: number) =>
        (this.car$ = this._carService.getCar(id).pipe(
          tap((car: Car | undefined) => {
            this._seoService.setMetaTags(car?.brand + ' ' + car?.model, car?.price + '€');
          }),
        ))
    );
  }
}
