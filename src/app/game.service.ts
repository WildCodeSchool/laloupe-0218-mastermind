import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Room } from './models/room';
import { AuthService } from './auth.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Injectable()
export class GameService {

  room: Room;
  roomId: string;

  constructor(private db: AngularFirestore, private authService: AuthService, private router: Router) { }

  initGame(roomId: string) {
    this.roomId = roomId;
    this.db.doc<Room>('rooms/' + roomId).valueChanges().subscribe((room) => {
      this.room = room;
      if (this.room.players.length > 1 && (this.room.players[0].won || this.room.players[1].won)) {
        if (this.room.players[0].name === this.authService.username && this.room.players[0].won) {
          alert('You won the match !');
          this.router.navigate(['']);
        } else {
          alert('You lost. Your opponent has been faster than you !');
          this.router.navigate(['']);
        }
      }
    });
  }


  won() {
    const username = this.authService.username;
    if (this.room.players[0].name === username) {
      this.room.players[0].won = true;
    } else {
      this.room.players[1].won = true;
    }

    this.db.doc<Room>('rooms/' + this.roomId).set(this.room);
  }

}
