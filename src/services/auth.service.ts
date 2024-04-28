import { Injectable, NgZone } from "@angular/core";
import { FirebaseAuthentication, PhoneVerificationCompletedEvent, SignInResult, User } from "@capacitor-firebase/authentication";
import { Platform } from "@ionic/angular";
import { Observable, ReplaySubject, Subject, lastValueFrom, take } from "rxjs";
import { environment } from "src/environments/environment";
import { initializeApp } from 'firebase/app';
import { Capacitor } from "@capacitor/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new ReplaySubject<User | null>(1);
    private phoneVerificationCompletedSubject =
        new Subject<PhoneVerificationCompletedEvent>();
    private phoneCodeSentSubject = new Subject<{
        verificationId: string;
    }>();
    constructor(
        private readonly platform: Platform,
        private readonly ngZone: NgZone,
    ) {
        FirebaseAuthentication.removeAllListeners().then(() => {
            FirebaseAuthentication.addListener('authStateChange', (change) => {
              this.ngZone.run(() => {
                this.currentUserSubject.next(change.user);
              });
            });
            FirebaseAuthentication.addListener(
              'phoneVerificationCompleted',
              async (event) => {
                this.ngZone.run(() => {
                  this.phoneVerificationCompletedSubject.next(event);
                });
              },
            );
            FirebaseAuthentication.addListener('phoneCodeSent', async (event) => {
              this.ngZone.run(() => {
                this.phoneCodeSentSubject.next(event);
              });
            });
          });
          // Only needed to support dev livereload.
          FirebaseAuthentication.getCurrentUser().then((result) => {
            this.currentUserSubject.next(result.user);
          });
    }

    public get currentUser$(): Observable<User | null> {
      return this.currentUserSubject.asObservable();
    }

    public async getRedirectResult(): Promise<SignInResult | undefined> {
      if (Capacitor.isNativePlatform()) {
        return;
      }
      return FirebaseAuthentication.getRedirectResult();
    }

    public async initialize(): Promise<void> {
        if (this.platform.is('capacitor')) {
          return;
        }
        initializeApp(environment.firebaseConfig);
    }

    get isLoggedIn(): boolean {
        return true;
    }

    get currentUser(): Promise<User | null> {
      return lastValueFrom(this.currentUser$.pipe(take(1)));
    }

    get email(): string {
        return 'mustafafalaytracker@gmail.com';
    }

    get isAdmin(): boolean {
        return this.email == 'mustafafalaytracker@gmail.com';
    }

    public async signInWithGoogle(): Promise<void> {
        await FirebaseAuthentication.signInWithGoogle({
          mode: 'redirect',
        });
    }
}