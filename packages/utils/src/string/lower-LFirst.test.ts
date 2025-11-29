import { describe, it, expect } from 'vitest';
import { lowerFirst } from './lowerFirst';

describe('lowerFirst', () => {
  it('should lower first character', () => {
    expect(lowerFirst('Fred')).toBe('fred');
    expect(lowerFirst('FRED')).toBe('fRED');
  });

  it('should handle empty string', () => {
    expect(lowerFirst('')).toBe('');
  });
});
