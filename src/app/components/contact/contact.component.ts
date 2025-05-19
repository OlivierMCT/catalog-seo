import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [FormsModule],
  standalone: true,
})
export class ContactComponent {
  public email = '';
  public message = '';

  public constructor() { }

  public save(): void {
    this.email = '';
    this.message = 'merci pour votre inscription';
  }
}
