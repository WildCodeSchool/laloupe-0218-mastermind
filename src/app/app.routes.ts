import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RulesComponent } from './rules/rules.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';
import { BoardComponent } from './board/board.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'matchmaking', component: MatchmakingComponent },
    {path: 'board', component: BoardComponent }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
