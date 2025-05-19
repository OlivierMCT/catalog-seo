import { Component, inject, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  standalone: true,
})
export class AccountComponent {
  public user: User | null = null;
  private _router: Router = inject(Router);

  public constructor(
    private _userService: UserService
  ) {
    this.user = this._userService.currentUser;
  }
  public disconnect(): void {
    this._userService.logout();
    this._router.navigate(['/']);
  }
}
