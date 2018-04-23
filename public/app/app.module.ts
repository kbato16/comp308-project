// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app.routes';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
// Components - vitals
import { VitalsComponent } from './components/vitals/vitals.component';
import { VitalsListComponent } from './components/vitals/list/list.component';
import { VitalsCreateComponent } from './components/vitals/create/create.component';
import { ViewComponent } from './components/vitals/view/view.component'



// Services
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';
import { ValidateService } from './services/validate.service';
import { VitalsService } from './services/vitals.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    VitalsComponent,
    VitalsListComponent,
    VitalsCreateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    DataService, 
    LoginService,
    ValidateService,
    VitalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
