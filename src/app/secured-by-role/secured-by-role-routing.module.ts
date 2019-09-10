import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    { path: 'app', component: AppComponent }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class SecuredByRoleRoutingModule { }
