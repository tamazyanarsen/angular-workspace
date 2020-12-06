import { TestBed } from '@angular/core/testing';

import { NgSliderService } from './ng-slider.service';

describe('NgSliderService', () => {
  let service: NgSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
