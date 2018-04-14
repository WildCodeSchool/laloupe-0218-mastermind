import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { routes, router } from '../app.routes';
import { Routes, RouterModule, Router } from '@angular/router';
import { log } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public routerLogin: Router) {}

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  playAgain() {
    console.log("Hello world");
    this.routerLogin.navigate[('rules')]; 
  }
}
