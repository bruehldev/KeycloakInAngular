import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredByRoleComponent } from './secured-by-role.component';

describe('SecuredByRoleComponent', () => {
  let component: SecuredByRoleComponent;
  let fixture: ComponentFixture<SecuredByRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredByRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
