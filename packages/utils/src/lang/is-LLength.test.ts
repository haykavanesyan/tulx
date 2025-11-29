import { describe, it, expect } from 'vitest';

import { isLength } from './is-LLength';

describe('isLength', () => {
  it('should return true for valid lengths', () => {
    expect(isLength(3)).toBe(true);
    expect(isLength(0)).toBe(true);
    expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it('should return false for invalid lengths', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
    expect(isLength(Infinity)).toBe(false);
    expect(isLength(-1)).toBe(false);
    expect(isLength(3.2)).toBe(false);
    expect(isLength('3')).toBe(false);
  });
});
