import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { routes, router } from '../app.routes';
import { Routes, RouterModule, Router } from '@angular/router';
import { log } from 'util';
import { AngularFirestore } from 'angularfire2/firestore';
import { Room } from '../models/room';
import { Player } from '../models/player';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFirestore, public authService: AuthService, public routerLogin: Router) {}

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  playAgain() {
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
            this.routerLogin.navigate(['board', roomId, player.name]);
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
        console.log(newRoom.players);
        this.db.collection('rooms')
          .add(JSON.parse(JSON.stringify(newRoom)))
          .then((doc) => {
            this.routerLogin.navigate(['board', doc.id, player.name]);
          });
      });
    }
  }
}
