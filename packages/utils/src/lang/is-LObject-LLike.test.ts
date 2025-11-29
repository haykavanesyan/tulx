import { describe, it, expect } from 'vitest';

import { isObjectLike } from './is-LObject-LLike';

describe('isObjectLike', () => {
  it('should return true for objects', () => {
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });

  it('should return false for functions', () => {
    expect(isObjectLike(() => {})).toBe(false);
  });

  it('should return false for null', () => {
    expect(isObjectLike(null)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isObjectLike(1)).toBe(false);
    expect(isObjectLike('abc')).toBe(false);
  });
});
