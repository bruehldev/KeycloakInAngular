import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredByRoleRoutingModule } from './secured-by-role-routing.module';
import { SecuredByRoleComponent } from './secured-by-role.component';

@NgModule({
  imports: [
    CommonModule,
    SecuredByRoleRoutingModule
  ],
  declarations: [SecuredByRoleComponent]
})
export class SecuredByRoleModule { }
