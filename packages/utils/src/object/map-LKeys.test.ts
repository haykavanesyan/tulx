import { describe, it, expect } from 'vitest';
import { mapKeys } from './mapKeys';

describe('mapKeys', () => {
  it('should map keys with iteratee', () => {
    expect(mapKeys({ a: 1, b: 2 }, (value, key) => key + value)).toEqual({
      a1: 1,
      b2: 2,
    });
  });
});
