import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Room } from '../models/room';
import { Player } from '../models/player';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {

  constructor(private db: AngularFirestore, private routerMatchmaking: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    const roomCollection = this.db.collection<Room>('rooms');

    const snapshot = roomCollection.snapshotChanges().take(1).subscribe(snapshot1 => {
      const player = new Player();
      player.name = 'user' + Math.floor(Math.random() * 1000);
      this.authService.username = player.name;
      for (const snapshotItem of snapshot1) {
        const roomId = snapshotItem.payload.doc.id;
        const room = snapshotItem.payload.doc.data() as Room;

        if (room.players.length === 1) {
          room.players.push(player);
          this.db.doc('rooms/' + roomId).update(JSON.parse(JSON.stringify(room)));
          this.routerMatchmaking.navigate(['board', roomId, player.name]);
          return;
        }
      }

      const newRoom = new Room();
      newRoom.combination = [];
      let i = 0;
      while (i < 4) {
        newRoom.combination.push(Math.floor(Math.random() * 6));
        i++;
      }
      newRoom.players = [player];
      this.db.collection('rooms')
        .add(JSON.parse(JSON.stringify(newRoom)))
        .then((doc) => {
          this.routerMatchmaking.navigate(['board', doc.id, player.name]);
        });
    });
  }
}
