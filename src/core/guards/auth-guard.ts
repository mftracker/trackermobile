import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  public async canActivate(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.authService.currentUser.then(user => {
        console.log(user);
        if (user) {
          resolve(true);
          return;
        }
        this.router.navigate(['/login']);
        resolve(false);
      });
    })
  }
}