import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  public async canActivate(): Promise<boolean> {
    const user = await this.authService.currentUser;
    if (user) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}