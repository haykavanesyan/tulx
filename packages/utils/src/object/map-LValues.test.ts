import { describe, it, expect } from 'vitest';

import { mapValues } from './map-LValues';

describe('mapValues', () => {
  it('should map values with iteratee', () => {
    const users = {
      fred: { user: 'fred', age: 40 },
      pebbles: { user: 'pebbles', age: 1 },
    };
    expect(mapValues(users, (o) => o.age)).toEqual({ fred: 40, pebbles: 1 });
  });
});
