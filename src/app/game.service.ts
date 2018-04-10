import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Room } from './models/room';
import { AuthService } from './auth.service';

@Injectable()
export class GameService {

  room: Room;
  roomId: string;

  constructor(private db: AngularFirestore, private authService: AuthService) {}

  initGame(roomId: string) {
    this.roomId = roomId;
    this.db.doc<Room>('rooms/' + roomId).valueChanges().subscribe((room) => {
      this.room = room;
      console.log(this.room);
    });
  }

  won() {
    let username = this.authService.username;
    if (this.room.players[0].name == username) {
      this.room.players[0].won = true;
    } else {
      this.room.players[1].won = true;
    }

    this.db.doc<Room>('rooms/' + this.roomId).set(this.room);
  }

}
