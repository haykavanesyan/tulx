import { describe, it, expect } from 'vitest';

import { some } from './some';

describe('some', () => {
  it('should return true when any element passes', () => {
    expect(some([null, 0, 'yes', false], Boolean)).toBe(true);
  });

  it('should return false when no elements pass', () => {
    expect(some([null, 0, false], Boolean)).toBe(false);
  });

  it('should use Boolean as default predicate', () => {
    expect(some([null, 0, 'yes'])).toBe(true);
    expect(some([null, 0, false])).toBe(false);
  });

  it('should work with objects', () => {
    expect(some({ a: 0, b: 2 }, (v) => v > 0)).toBe(true);
    expect(some({ a: 0, b: -2 }, (v) => v > 0)).toBe(false);
  });

  it('should return false for empty array', () => {
    expect(some([], Boolean)).toBe(false);
  });

  it('should return false for empty object', () => {
    expect(some({}, Boolean)).toBe(false);
  });
});
