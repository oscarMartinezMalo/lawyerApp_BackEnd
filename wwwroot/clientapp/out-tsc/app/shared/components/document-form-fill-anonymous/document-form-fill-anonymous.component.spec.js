import { async, TestBed } from '@angular/core/testing';
import { DocumentFormFillAnonymousComponent } from './document-form-fill-anonymous.component';
describe('DocumentFormFillAnonymousComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DocumentFormFillAnonymousComponent]
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
//# sourceMappingURL=document-form-fill-anonymous.component.spec.js.map