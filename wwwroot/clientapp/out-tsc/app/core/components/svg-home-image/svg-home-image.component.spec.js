import { async, TestBed } from '@angular/core/testing';
import { SvgHomeImageComponent } from './svg-home-image.component';
describe('SvgHomeImageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SvgHomeImageComponent]
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
//# sourceMappingURL=svg-home-image.component.spec.js.map