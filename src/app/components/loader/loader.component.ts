import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { filter, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  standalone: true,
})
export class LoaderComponent {
  public isLoading$: Observable<boolean | undefined>;
constructor(private _router: Router) {
  this.isLoading$ = this._router.events.pipe(
    filter(event => event instanceof NavigationStart || event instanceof NavigationEnd),
    map((event) => event instanceof NavigationStart),
  );
}
}
