import { Component } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./components/loader/loader.component";
import { SeoService } from './services/seo.service';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  public currentYear = new Date().getFullYear();
  constructor(private _seoService: SeoService) {}
}
