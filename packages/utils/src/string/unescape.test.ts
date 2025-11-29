import { describe, it, expect } from 'vitest';
import { unescape } from './unescape';

describe('unescape', () => {
  it('should unescape HTML entities', () => {
    expect(unescape('fred, barney, &amp; pebbles')).toBe(
      'fred, barney, & pebbles'
    );
  });
});
