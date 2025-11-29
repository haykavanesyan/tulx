import { describe, it, expect } from 'vitest';

import { stubFalse } from './stub-false';

describe('stubFalse', () => {
  it('should return false', () => {
    expect(stubFalse()).toBe(false);
  });
});
