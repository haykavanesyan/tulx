import { describe, it, expect } from 'vitest';
import { toFinite } from './toFinite';

describe('toFinite', () => {
  it('should convert numbers to finite', () => {
    expect(toFinite(3.2)).toBe(3.2);
    expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  it('should convert Infinity to MAX_VALUE', () => {
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
    expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE);
  });

  it('should convert strings to finite numbers', () => {
    expect(toFinite('3.2')).toBe(3.2);
  });
});
