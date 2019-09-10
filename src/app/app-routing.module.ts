import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionGuard } from './core/model/permission-guard';
import { AuthGuardService as AuthGuard } from './core/guard/auth-guard.service';
import { AppComponent } from './app.component';
import { SecuredByLoginComponent } from './secured-by-login/secured-by-login.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'app', pathMatch: 'full' },
	{ path: 'app', component: AppComponent },
	{ path: 'secured', canActivate: [AuthGuard], component: SecuredByLoginComponent },
	{
		path: 'secured-by-role',
		canLoad: [AuthGuard],
		loadChildren: 'app/secured-by-role/secured-by-role.module#SecuredByRoleModule',
		data: {
			Permission: {
				Role: 'AppRole',
				RedirectTo: '403'
			} as PermissionGuard
		}
	},
	{
		path: 'secured-by-group',
		canLoad: [AuthGuard],
		loadChildren: 'app/secured-by-group/secured-by-group.module#SecuredByGroupModule',
		data: {
			Permission: {
				Only: ['User'],
				RedirectTo: '403'
			} as PermissionGuard
		}
	},

	{ path: '403', component: NotAllowedComponent },
	{ path: '404', component: NotFoundComponent },

	{ path: '**', redirectTo: '404' }
];

@NgModule({ 
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
