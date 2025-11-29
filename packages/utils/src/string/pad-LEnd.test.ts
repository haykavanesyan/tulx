import { describe, it, expect } from 'vitest';

import { padEnd } from './pad-LEnd';

describe('padEnd', () => {
  it('should pad string on right side', () => {
    expect(padEnd('abc', 6)).toBe('abc   ');
    expect(padEnd('abc', 6, '_-')).toBe('abc_-_');
    expect(padEnd('abc', 3)).toBe('abc');
  });
});
