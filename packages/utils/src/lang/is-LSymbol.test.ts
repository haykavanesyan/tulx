import { describe, it, expect } from 'vitest';
import { isSymbol } from './isSymbol';

describe('isSymbol', () => {
  it('should return true for symbols', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
    expect(isSymbol(Symbol('test'))).toBe(true);
  });

  it('should return false for non-symbols', () => {
    expect(isSymbol('abc')).toBe(false);
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol(null)).toBe(false);
  });
});
