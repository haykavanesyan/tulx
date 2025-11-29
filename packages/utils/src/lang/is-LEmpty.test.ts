import { describe, it, expect } from 'vitest';
import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty collections', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return true for primitives', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  it('should return false for non-empty collections', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
  });
});
