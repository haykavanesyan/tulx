import { describe, it, expect } from 'vitest';

import { pick } from './pick';

describe('pick', () => {
  it('should pick specified properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});
