import { describe, it, expect } from 'vitest';

import { words } from './words';

describe('words', () => {
  it('should split into words', () => {
    expect(words('fred, barney, & pebbles')).toEqual([
      'fred',
      'barney',
      'pebbles',
    ]);
  });

  it('should use custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual([
      'fred',
      'barney',
      '&',
      'pebbles',
    ]);
  });
});
