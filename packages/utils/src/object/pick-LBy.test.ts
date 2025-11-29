import { describe, it, expect } from 'vitest';

import { pickBy } from './pick-LBy';

describe('pickBy', () => {
  it('should pick properties by predicate', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pickBy(object, (value) => typeof value === 'number')).toEqual({
      a: 1,
      c: 3,
    });
  });
});
