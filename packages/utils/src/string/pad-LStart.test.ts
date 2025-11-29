import { describe, it, expect } from 'vitest';

import { padStart } from './pad-LStart';

describe('padStart', () => {
  it('should pad string on left side', () => {
    expect(padStart('abc', 6)).toBe('   abc');
    expect(padStart('abc', 6, '_-')).toBe('_-_abc');
    expect(padStart('abc', 3)).toBe('abc');
  });
});
