import { describe, it, expect } from 'vitest';
import { isMap } from './isMap';

describe('isMap', () => {
  it('should return true for Map objects', () => {
    expect(isMap(new Map())).toBe(true);
  });

  it('should return false for WeakMap', () => {
    expect(isMap(new WeakMap())).toBe(false);
  });

  it('should return false for non-maps', () => {
    expect(isMap({})).toBe(false);
    expect(isMap(null)).toBe(false);
  });
});
