import { ApplicationConfig, inject, Injectable, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, provideRouter, Route, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class CustomStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of(null);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideRouter(routes),
    provideRouter(routes, withPreloading(CustomStrategy)),
    //provideRouter(routes, withPreloading(PreloadAllModules)),
  ]
};


