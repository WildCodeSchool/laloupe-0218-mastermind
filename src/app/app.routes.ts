import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RulesComponent } from './rules/rules.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component'

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'matchmaking', component: MatchmakingComponent }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
