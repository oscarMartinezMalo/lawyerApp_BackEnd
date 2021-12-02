import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHomeImageComponent } from './svg-home-image.component';

describe('SvgHomeImageComponent', () => {
  let component: SvgHomeImageComponent;
  let fixture: ComponentFixture<SvgHomeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgHomeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgHomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
