import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredByGroupComponent } from './secured-by-group.component';

describe('SecuredByGroupComponent', () => {
  let component: SecuredByGroupComponent;
  let fixture: ComponentFixture<SecuredByGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredByGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredByGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
