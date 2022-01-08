import { async, TestBed } from '@angular/core/testing';
import { DocumentFormFillComponent } from './document-form-fill.component';
describe('DocumentFormFillComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DocumentFormFillComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DocumentFormFillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=document-form-fill.component.spec.js.map