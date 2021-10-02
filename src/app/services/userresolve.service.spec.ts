import { TestBed } from '@angular/core/testing';

import { UserresolveService } from './userresolve.service';

describe('UserresolveService', () => {
  let service: UserresolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserresolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
