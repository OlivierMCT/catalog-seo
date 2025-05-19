import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  standalone: true,
})
export class LoginComponent {
  public email = 'donald@disney.com';
  public password = 'azerty';
  public message = '';

  public constructor(
    private _userService: UserService,
    private _router: Router,
  ) { }

  public connect(): void {
    if (this._userService.login(this.email, this.password)) {
      this._router.navigate(['/mon-compte']);
    } else {
      this.message = 'Qui êtes-vous ?';
    }
  }
}
