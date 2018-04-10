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

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {

  constructor(private db: AngularFirestore, private routerMatchmaking: Router) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    const roomCollection = this.db.collection<Room>('rooms');

    const snapshot = roomCollection.snapshotChanges().subscribe(snapshot1 => {
      for (const snapshotItem of snapshot1) {
        const roomId = snapshotItem.payload.doc.id;
        const room = snapshotItem.payload.doc.data() as Room;

        if (room.players.length === 1) {
          const player = new Player();
          player.name = 'user' + Math.floor(Math.random() * 1000);
          room.players.push(player);
          this.db.doc('rooms/' + roomId).update(JSON.parse(JSON.stringify(room)));
          this.routerMatchmaking.navigate(['board', roomId, player.name]);
          break;
        }
      }
    });
  }
}
