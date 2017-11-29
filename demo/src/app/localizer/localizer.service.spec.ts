import { TestBed, inject } from '@angular/core/testing';

import { LocalizerService } from './localizer.service';

describe('LocalizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalizerService]
    });
  });

  it('should be created', inject([LocalizerService], (service: LocalizerService) => {
    expect(service).toBeTruthy();
  }));
});
