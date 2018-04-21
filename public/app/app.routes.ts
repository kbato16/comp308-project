import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';

const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent];
