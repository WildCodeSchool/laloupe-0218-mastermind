import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor(private authService: AuthService, private routerRules: Router) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.routerRules.navigate(['login']);
  }

  alerte() {
    alert('Please login again if you want to play');
  }
}
