import { describe, it, expect } from 'vitest';

import { kebabCase } from './kebab-LCase';

describe('kebabCase', () => {
  it('should convert to kebab case', () => {
    expect(kebabCase('Foo Bar')).toBe('foo-bar');
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
  });
});
