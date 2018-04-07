import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';



import { AngularFireModule } from 'angularfire2';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';


import { LoginComponent } from './login/login.component';
import { RulesComponent } from './rules/rules.component';
import { RouterLinkActive } from '@angular/router';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';
import { Routes, RouterModule } from '@angular/router';
import { routes, router } from './app.routes';
import 'rxjs/Rx';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RulesComponent,
    MatchmakingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
