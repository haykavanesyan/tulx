import { describe, it, expect } from 'vitest';

import { gt } from './gt';

describe('gt', () => {
  it('should return true when value is greater', () => {
    expect(gt(3, 1)).toBe(true);
    expect(gt('d', 'a')).toBe(true);
  });

  it('should return false when value is equal', () => {
    expect(gt(3, 3)).toBe(false);
    expect(gt('a', 'a')).toBe(false);
  });

  it('should return false when value is less', () => {
    expect(gt(1, 3)).toBe(false);
    expect(gt('a', 'd')).toBe(false);
  });
});
