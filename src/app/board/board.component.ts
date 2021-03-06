// Contains the different components for the game

import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../models/room';
import { GameService } from '../game.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  roomId: string;
  username: string;

  constructor(private db: AngularFirestore,
              private route: ActivatedRoute,
              public gameService: GameService,
              public authService: AuthService,
              private routerBoard: Router) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');
    this.gameService.initGame(this.roomId);
  }

  logout() {
    this.authService.logout();
    this.routerBoard.navigate(['login']);
  }
}
