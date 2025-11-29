import { describe, it, expect } from 'vitest';
import { upperFirst } from './upperFirst';

describe('upperFirst', () => {
  it('should upper first character', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });

  it('should handle empty string', () => {
    expect(upperFirst('')).toBe('');
  });
});
