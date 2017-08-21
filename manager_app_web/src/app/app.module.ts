// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule, MaterializeDirective, MaterializeAction } from 'angular2-materialize';

// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterCondoComponent } from './condos/register-condo/register-condo.component';
import { CondoDetailsComponent } from './condos/condo-details/condo-details.component';
import { CondosListComponent } from './condos/condos-list/condos-list.component';
import { DwellerListComponent } from './dweller-list/dweller-list.component';

// Router
import { routing } from './app.routing';

// Services
import { AuthenticationService } from './_services/_auth/authentication.service';
import { UserService } from './_services/_user/user.service';
import { CondoService } from './_services/_condo/condo.service';
import { SyndicService } from './_services/_syndic/syndic.service';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    RegisterCondoComponent,
    CondoDetailsComponent,
    CondosListComponent,
    DwellerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    routing
  ],
  providers: [
    AuthenticationService,
    UserService,
    CondoService,
    SyndicService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
