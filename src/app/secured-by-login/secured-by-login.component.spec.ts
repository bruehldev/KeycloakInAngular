import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredByLoginComponent } from './secured-by-login.component';

describe('SecuredByLoginComponent', () => {
  let component: SecuredByLoginComponent;
  let fixture: ComponentFixture<SecuredByLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredByLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredByLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
