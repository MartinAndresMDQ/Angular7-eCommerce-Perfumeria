export const TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';
export const EXPIRES = 'expires';
export const USER_ID = 'userId';
export const EMAIL_FIELD = 'email';

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;
  public userG: firebase.User = null;
  calendarItems: any[] = [];

  refresh: Subject<any> = new Subject();

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    console.log(this.user)
  }

  public removeTokens(): void {
    this.userG = null;
  }

  loginEmail(user, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(user, pass).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  async login() {
    const googleAuth = gapi.auth2.getAuthInstance()
    const googleUser = await googleAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;

    console.log(googleUser)

    const credential = auth.GoogleAuthProvider.credential(token);
    await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.userG = null;
  }

}
