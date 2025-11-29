import { describe, it, expect } from 'vitest';

import { snakeCase } from './snake-LCase';

describe('snakeCase', () => {
  it('should convert to snake case', () => {
    expect(snakeCase('Foo Bar')).toBe('foo_bar');
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('--FOO-BAR--')).toBe('foo_bar');
  });
});
