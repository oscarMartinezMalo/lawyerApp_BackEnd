import { async, TestBed } from '@angular/core/testing';
import { ClientsDropdownComponent } from './clients-dropdown.component';
describe('ClientsDropdownComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientsDropdownComponent]
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
//# sourceMappingURL=clients-dropdown.component.spec.js.map