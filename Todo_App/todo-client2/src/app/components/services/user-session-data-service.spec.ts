import { TestBed } from '@angular/core/testing';

import { UserSessionDataService } from './user-session-data-service';

describe('UserSessionDataService', () => {
  let service: UserSessionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSessionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
