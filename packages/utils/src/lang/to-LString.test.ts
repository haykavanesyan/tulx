import { describe, it, expect } from 'vitest';
import { toString } from './toString';

describe('toString', () => {
  it('should return empty string for null and undefined', () => {
    expect(toString(null)).toBe('');
    expect(toString(undefined)).toBe('');
  });

  it('should return string as-is', () => {
    expect(toString('abc')).toBe('abc');
  });

  it('should convert numbers to strings', () => {
    expect(toString(123)).toBe('123');
    expect(toString(-0)).toBe('-0');
  });

  it('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  it('should convert symbols', () => {
    const sym = Symbol('test');
    expect(toString(sym)).toBe(sym.toString());
  });
});
