import { describe, it, expect } from 'vitest';
import { lte } from './lte';

describe('lte', () => {
  it('should return true when value is less', () => {
    expect(lte(1, 3)).toBe(true);
    expect(lte('a', 'd')).toBe(true);
  });

  it('should return true when value is equal', () => {
    expect(lte(3, 3)).toBe(true);
    expect(lte('a', 'a')).toBe(true);
  });

  it('should return false when value is greater', () => {
    expect(lte(3, 1)).toBe(false);
    expect(lte('d', 'a')).toBe(false);
  });
});
