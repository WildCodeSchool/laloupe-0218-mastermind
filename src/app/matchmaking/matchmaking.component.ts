import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { routes, router } from '../app.routes';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';
import { Room } from '../models/room';
import { Player } from '../models/player';
import 'rxjs/Rx';

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    let roomCollection = this.db.collection<Room>('rooms');

    let snapshot = roomCollection.snapshotChanges().subscribe(snapshot => {
      for (let snapshotItem of snapshot) {
        let roomId = snapshotItem.payload.doc.id;
        let room = snapshotItem.payload.doc.data() as Room;

        if(room.players.length == 1) {
          let player = new Player();
          player.name = "user" + Math.floor(Math.random() * 1000);
          room.players.push(player);
          this.db.doc("rooms/" + roomId).update(JSON.parse(JSON.stringify(room)));
         // this.router.navigate("board", roomId, player.name);
          break;
        }
      }
    });  
  }
}
