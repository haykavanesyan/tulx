import { describe, it, expect } from 'vitest';

import { omit } from './omit';

describe('omit', () => {
  it('should omit specified properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(omit(object, ['a', 'c'])).toEqual({ b: '2' });
  });
});
