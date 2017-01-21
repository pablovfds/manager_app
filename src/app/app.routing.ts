import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);