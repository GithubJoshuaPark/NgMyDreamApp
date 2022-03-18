import { TestBed } from '@angular/core/testing';

import { RegisterEffectService } from './register-effect.service';

describe('RegisterEffectService', () => {
  let service: RegisterEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
