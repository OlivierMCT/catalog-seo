import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [RouterLink],
  standalone: true,
})
export class AboutComponent {
  public constructor() { }
}
