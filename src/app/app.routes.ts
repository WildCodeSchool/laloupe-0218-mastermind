import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'test1', component: Test1Component},
    { path: 'login', component: LoginComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);