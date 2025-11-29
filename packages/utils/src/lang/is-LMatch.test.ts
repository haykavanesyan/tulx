import { describe, it, expect } from 'vitest';

import { isMatch } from './is-LMatch';

describe('isMatch', () => {
  it('should return true when object matches source', () => {
    const object = { a: 1, b: 2 };
    expect(isMatch(object, { b: 2 })).toBe(true);
  });

  it('should return false when object does not match', () => {
    const object = { a: 1, b: 2 };
    expect(isMatch(object, { b: 1 })).toBe(false);
  });

  it('should handle nested objects', () => {
    const object = { a: { b: { c: 1 } } };
    expect(isMatch(object, { a: { b: { c: 1 } } })).toBe(true);
    expect(isMatch(object, { a: { b: { c: 2 } } })).toBe(false);
  });
});
