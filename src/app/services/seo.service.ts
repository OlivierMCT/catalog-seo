import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { delay, filter, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
    )
  {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      map((event) => (<ActivationEnd>event).snapshot),
      map((snapshot) => <ActivatedRouteSnapshot>snapshot),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      map((snapshot) => (<ActivatedRouteSnapshot>snapshot).data)
    )
    .subscribe((data) => {
      const title = data['title'] || 'Default Title';
      const description = data['description'] || 'Default Description';

      console.log('title', title);
      console.log('description', description);

      this.setMetaTags(title, description);
    });
  }

  public setMetaTags(title: string, description: string): void {
    const titleTag = this.document?.querySelector('title')!;
    titleTag.textContent = title;

    const descriptionTag = this.document?.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description);
    } else {
      const newDescriptionTag = this.document?.createElement('meta');
      newDescriptionTag.name = 'description';
      newDescriptionTag.content = description;
      this.document?.head.appendChild(newDescriptionTag);
    }
  }
}
