import { describe, it, expect } from 'vitest';

import { lowerCase } from './lower-LCase';

describe('lowerCase', () => {
  it('should convert to lower case', () => {
    expect(lowerCase('--Foo-Bar--')).toBe('foo  bar'); // Multiple spaces from regex replacement
    expect(lowerCase('fooBar')).toBe('foo bar');
    expect(lowerCase('__FOO_BAR__')).toBe('foo  bar'); // Multiple spaces from regex replacement
  });
});
