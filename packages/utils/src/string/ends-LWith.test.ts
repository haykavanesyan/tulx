import { describe, it, expect } from 'vitest';

import { endsWith } from './ends-LWith';

describe('endsWith', () => {
  it('should check if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'b', 2)).toBe(true);
  });
});
