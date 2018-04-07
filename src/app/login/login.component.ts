import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  authenticated = false;


  constructor(public afAuth: AngularFireAuth, private router: Router) {

    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.authenticated = true;
          this.router.navigate(['matchmaking']);
        }
      }
    );
  }


  ngOnInit() {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authenticated = true;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.authenticated = false;
  }
}
