import { describe, it, expect } from 'vitest';

import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should capitalize first character', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('fred')).toBe('Fred');
  });

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
