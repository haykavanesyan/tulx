import { describe, it, expect } from 'vitest';

import { invert } from './invert';

describe('invert', () => {
  it('should invert keys and values', () => {
    const object = { a: 1, b: 2, c: 1 };
    const result = invert(object);
    expect(result).toEqual({ '1': 'c', '2': 'b' });
  });
});
