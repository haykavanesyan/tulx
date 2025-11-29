import { describe, it, expect } from 'vitest';

import { isString } from './is-LString';

describe('isString', () => {
  it('should return true for string primitives', () => {
    expect(isString('abc')).toBe(true);
    expect(isString('')).toBe(true);
  });

  it('should return true for String objects', () => {
    expect(isString(new String('abc'))).toBe(true);
  });

  it('should return false for non-strings', () => {
    expect(isString(1)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString([])).toBe(false);
  });
});
