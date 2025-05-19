
import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { log } from 'console';

export class User {
  public constructor(
    public userId: number,
    public lastName: string,
    public firstName: string,
    public email: string,
    public password: string
  ) { }
}

@Injectable({ providedIn: 'root' })
export class UserService {

  private _accounts: User[] = [
    new User(1, 'Duck', 'Donald', 'donald@disney.com', 'azerty'),
    new User(2, 'Duck', 'Daisie', 'daisie@disney.com', 'azerty'),
    new User(3, 'Picsou', 'Balthazar', 'picsou@disney.com', 'azerty'),
    new User(4, 'Mouse', 'Mickey', 'mickey@disney.com', 'azerty'),
    new User(5, 'Mouse', 'Minnie', 'minnie@disney.com', 'azerty')
  ];

  private _currentUser: User | null = null;
  public get currentUser(): User | null { return this._currentUser; }
  public get isUserAuthenticated(): boolean { return this.currentUser != null; }

  public constructor() { }

  public login(email: string, password: string): boolean {
    this._currentUser = null;
    const usr = this._accounts.find(u => u.email === email && u.password === password);
    if (usr) { this._currentUser = usr; }
    return this.isUserAuthenticated;
  }

  public logout(): void { this._currentUser = null; }

  public static AUTHORIZE_GUARD: CanActivateFn = (route, state) => {
    const userService = inject(UserService);
    if (userService.isUserAuthenticated) {
      return true;
    } else {
      return inject(Router).createUrlTree(['/se-connecter']);
    }
  };
}
