import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredByGroupRoutingModule } from './secured-by-group-routing.module';
import { SecuredByGroupComponent } from './secured-by-group.component';

@NgModule({
  imports: [
    CommonModule,
    SecuredByGroupRoutingModule
  ],
  declarations: [SecuredByGroupComponent]
})
export class SecuredByGroupModule { }
