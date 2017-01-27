import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterCondoComponent } from './condos/register-condo/register-condo.component';
import { CondoDetailsComponent } from './condos/condo-details/condo-details.component';

import { ParseManager } from './shared/ParseManager';
import { routing } from './app.routing';
import { condosRouting } from './condos/condos.routing';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    RegisterCondoComponent,
    CondoDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    routing,
    condosRouting
  ],
  providers: [ParseManager],
  bootstrap: [AppComponent]
})
export class AppModule { }