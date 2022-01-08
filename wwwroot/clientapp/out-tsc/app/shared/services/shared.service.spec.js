import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
describe('SharedService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SharedService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=shared.service.spec.js.map