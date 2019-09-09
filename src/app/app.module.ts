import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
