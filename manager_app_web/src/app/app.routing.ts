import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterCondoComponent } from './condos/register-condo/register-condo.component';
import { CondoDetailsComponent } from './condos/condo-details/condo-details.component';

import { AuthGuard } from './_guards/auth.guard';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'condos/new', component: RegisterCondoComponent, canActivate: [AuthGuard]},
    { path: 'condos/:id', component: CondoDetailsComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
