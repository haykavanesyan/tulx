import { describe, it, expect } from 'vitest';

import { isRegExp } from './is-LReg-LExp';

describe('isRegExp', () => {
  it('should return true for RegExp objects', () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp(new RegExp('abc'))).toBe(true);
  });

  it('should return false for non-regexp values', () => {
    expect(isRegExp('/abc/')).toBe(false);
    expect(isRegExp('abc')).toBe(false);
    expect(isRegExp(null)).toBe(false);
  });
});
