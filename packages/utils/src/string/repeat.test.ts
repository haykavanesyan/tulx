import { describe, it, expect } from 'vitest';

import { repeat } from './repeat';

describe('repeat', () => {
  it('should repeat string n times', () => {
    expect(repeat('*', 3)).toBe('***');
    expect(repeat('abc', 2)).toBe('abcabc');
    expect(repeat('abc', 0)).toBe('');
  });
});
