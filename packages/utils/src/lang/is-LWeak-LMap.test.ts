import { describe, it, expect } from 'vitest';
import { isWeakMap } from './isWeakMap';

describe('isWeakMap', () => {
  it('should return true for WeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  it('should return false for Map', () => {
    expect(isWeakMap(new Map())).toBe(false);
  });

  it('should return false for non-maps', () => {
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap(null)).toBe(false);
  });
});
