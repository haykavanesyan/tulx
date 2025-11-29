import { describe, it, expect } from 'vitest';

import { parseInt } from './parseInt';

describe('parseInt', () => {
  it('should parse string to integer', () => {
    expect(parseInt('08')).toBe(8);
    expect(parseInt('10', 2)).toBe(2);
  });
});
