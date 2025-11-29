import { describe, it, expect } from 'vitest';

import { every } from './every';

describe('every', () => {
  it('should return false when not all elements pass', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
  });

  it('should return true when all elements pass', () => {
    expect(every([true, 1], Boolean)).toBe(true);
  });

  it('should use Boolean as default predicate', () => {
    expect(every([true, 1])).toBe(true);
    expect(every([true, 0])).toBe(false);
  });

  it('should work with objects', () => {
    expect(every({ a: 1, b: 2 }, (v) => v > 0)).toBe(true);
    expect(every({ a: 1, b: -2 }, (v) => v > 0)).toBe(false);
  });

  it('should return true for empty array', () => {
    expect(every([], Boolean)).toBe(true);
  });

  it('should return true for empty object', () => {
    expect(every({}, Boolean)).toBe(true);
  });
});
