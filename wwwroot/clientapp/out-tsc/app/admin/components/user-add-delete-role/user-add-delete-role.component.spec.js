import { async, TestBed } from '@angular/core/testing';
import { UserAddDeleteRoleComponent } from './user-add-delete-role.component';
describe('UserAddDeleteRoleComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAddDeleteRoleComponent]
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
//# sourceMappingURL=user-add-delete-role.component.spec.js.map