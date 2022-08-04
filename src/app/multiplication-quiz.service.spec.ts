import { TestBed } from '@angular/core/testing';

import { MultiplicationQuizService } from './multiplication-quiz.service';

describe('MultiplicationQuizService', () => {
  let service: MultiplicationQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicationQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
