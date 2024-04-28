import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getRedirectResult().then((result) => {

      if (result?.user) {
        
      }
    });
    this.authService.currentUser.then(value => console.log(value))
  }

  public async signInWithGoogle(): Promise<void> {
    await this.authService.signInWithGoogle();
  }
}
