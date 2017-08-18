import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterCondoComponent } from './condos/register-condo/register-condo.component';
import { CondoDetailsComponent } from './condos/condo-details/condo-details.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent},
    { path: 'condos/new', component: RegisterCondoComponent},
    { path: 'condos/:id', component: CondoDetailsComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
