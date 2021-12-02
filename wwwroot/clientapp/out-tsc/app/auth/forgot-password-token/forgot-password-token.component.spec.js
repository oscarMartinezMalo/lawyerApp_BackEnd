import { async, TestBed } from '@angular/core/testing';
import { ForgotPasswordTokenComponent } from './forgot-password-token.component';
describe('ForgotPasswordTokenComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForgotPasswordTokenComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ForgotPasswordTokenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forgot-password-token.component.spec.js.map