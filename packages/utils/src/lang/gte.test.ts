import { describe, it, expect } from 'vitest';
import { gte } from './gte';

describe('gte', () => {
  it('should return true when value is greater', () => {
    expect(gte(3, 1)).toBe(true);
    expect(gte('d', 'a')).toBe(true);
  });

  it('should return true when value is equal', () => {
    expect(gte(3, 3)).toBe(true);
    expect(gte('a', 'a')).toBe(true);
  });

  it('should return false when value is less', () => {
    expect(gte(1, 3)).toBe(false);
    expect(gte('a', 'd')).toBe(false);
  });
});
