import { describe, it, expect } from 'vitest';
import { size } from './size';

describe('size', () => {
  it('should return array length', () => {
    expect(size([1, 2, 3])).toBe(3);
  });

  it('should return object property count', () => {
    expect(size({ a: 1, b: 2 })).toBe(2);
  });

  it('should return string length', () => {
    expect(size('pebbles')).toBe(7);
  });

  it('should return 0 for empty array', () => {
    expect(size([])).toBe(0);
  });

  it('should return 0 for empty object', () => {
    expect(size({})).toBe(0);
  });

  it('should return 0 for empty string', () => {
    expect(size('')).toBe(0);
  });
});
