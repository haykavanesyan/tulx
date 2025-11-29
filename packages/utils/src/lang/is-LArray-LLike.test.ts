import { describe, it, expect } from 'vitest';

import { isArrayLike } from './is-LArray-LLike';

describe('isArrayLike', () => {
  it('should return true for arrays', () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });

  it('should return true for strings', () => {
    expect(isArrayLike('abc')).toBe(true);
  });

  it('should return true for array-like objects', () => {
    const obj = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
    expect(isArrayLike(obj)).toBe(true);
  });

  it('should return false for functions', () => {
    expect(isArrayLike(() => {})).toBe(false);
  });

  it('should return false for null', () => {
    expect(isArrayLike(null)).toBe(false);
  });
});
