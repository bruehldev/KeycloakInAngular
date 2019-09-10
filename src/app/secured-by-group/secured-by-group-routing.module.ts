import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuredByGroupComponent } from './secured-by-group.component';

const routes: Routes = [
    { path: '', component: SecuredByGroupComponent }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class SecuredByGroupRoutingModule { }



