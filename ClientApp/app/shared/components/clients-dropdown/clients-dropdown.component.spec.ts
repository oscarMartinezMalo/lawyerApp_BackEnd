import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDropdownComponent } from './clients-dropdown.component';

describe('ClientsDropdownComponent', () => {
  let component: ClientsDropdownComponent;
  let fixture: ComponentFixture<ClientsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
