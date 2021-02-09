import { TestBed } from '@angular/core/testing';

import { ToastRemoveService } from './toast-remove.service';

describe('ToastRemoveService', () => {
  let service: ToastRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
