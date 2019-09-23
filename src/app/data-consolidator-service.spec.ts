import { TestBed } from '@angular/core/testing';

import { DataConsolidatorService } from './data-consolidator-service';

describe('DataConsolidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataConsolidatorService = TestBed.get(DataConsolidatorService);
    expect(service).toBeTruthy();
  });
});
