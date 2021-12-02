import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAddDeleteUserComponent } from './role-add-delete-user.component';

describe('RoleAddDeleteUserComponent', () => {
  let component: RoleAddDeleteUserComponent;
  let fixture: ComponentFixture<RoleAddDeleteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAddDeleteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAddDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
