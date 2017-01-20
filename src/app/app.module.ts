import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersService } from './shared/users.service';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ParseManager } from './shared/ParseManager';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [UsersService, ParseManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
