import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SecuredHttpInterceptor } from './core/interceptor/secured-http.interceptor';
import { AuthGuardService } from "./core/guard/auth-guard.service";
import { KeycloakService } from "./core/auth/keycloak.service";

import { AppComponent } from './app.component';
import { SecuredByLoginComponent } from './secured-by-login/secured-by-login.component';
import { SecuredByRoleComponent } from './secured-by-role/secured-by-role.component';
import { SecuredByGroupComponent } from './secured-by-group/secured-by-group.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';

@NgModule({
  declarations: [
    AppComponent,
    SecuredByLoginComponent,
    SecuredByRoleComponent,
    SecuredByGroupComponent,
    NotFoundComponent,
    NotAllowedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    KeycloakService,
        AuthGuardService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SecuredHttpInterceptor,
            multi: true
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
