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
    const user = await this.authService.currentUser;
    if (user) {
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}