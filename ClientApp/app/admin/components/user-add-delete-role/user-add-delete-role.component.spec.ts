import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddDeleteRoleComponent } from './user-add-delete-role.component';

describe('UserAddDeleteRoleComponent', () => {
  let component: UserAddDeleteRoleComponent;
  let fixture: ComponentFixture<UserAddDeleteRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddDeleteRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddDeleteRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
