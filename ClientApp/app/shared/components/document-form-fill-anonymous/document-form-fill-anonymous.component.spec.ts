import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFormFillAnonymousComponent } from './document-form-fill-anonymous.component';

describe('DocumentFormFillAnonymousComponent', () => {
  let component: DocumentFormFillAnonymousComponent;
  let fixture: ComponentFixture<DocumentFormFillAnonymousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentFormFillAnonymousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFormFillAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
