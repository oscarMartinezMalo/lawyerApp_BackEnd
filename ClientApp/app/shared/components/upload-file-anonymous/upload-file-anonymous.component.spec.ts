import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileAnonymousComponent } from './upload-file-anonymous.component';

describe('UploadFileAnonymousComponent', () => {
  let component: UploadFileAnonymousComponent;
  let fixture: ComponentFixture<UploadFileAnonymousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileAnonymousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
