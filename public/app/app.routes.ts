import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { VitalsListComponent } from './components/vitals/list/list.component';
import { VitalsCreateComponent } from './components/vitals/create/create.component';
import { AppComponent } from './app.component';

const AppRoutes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { 
        path: 'vitals/:patientId', 
        component: VitalsComponent,
        children: [
            {path: 'list', component: VitalsListComponent},
            {path: 'create', component: VitalsCreateComponent}
        ]
    },
    { path: '**', component: HomeComponent }, 

];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent];
