import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.getRedirectResult().then((result) => {
      this.authService.currentUser.then(value => {
        if (value) {
          this.router.navigate(['home']);
        }
      });
    });
  }

  public async signInWithGoogle(): Promise<void> {
    await this.authService.signInWithGoogle();
  }
}
