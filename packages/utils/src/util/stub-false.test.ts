import { describe, it, expect } from 'vitest';
import { stubFalse } from './stubFalse';

describe('stubFalse', () => {
  it('should return false', () => {
    expect(stubFalse()).toBe(false);
  });
});
