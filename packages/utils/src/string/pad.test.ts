import { describe, it, expect } from 'vitest';
import { pad } from './pad';

describe('pad', () => {
  it('should pad string on both sides', () => {
    expect(pad('abc', 8)).toBe('  abc   ');
    expect(pad('abc', 8, '_-')).toBe('_-abc_-_');
    expect(pad('abc', 3)).toBe('abc');
  });
});
