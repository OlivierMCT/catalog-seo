import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, Observable, tap } from 'rxjs';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
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
    private _route: ActivatedRoute
  ) {
    this.car$ = this._route.data
      .pipe(
        map((data: Data) => data['theCar'])
    );
  }
}
