import { describe, it, expect } from 'vitest';

import { camelCase } from './camel-LCase';

describe('camelCase', () => {
  it('should convert to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });
});
