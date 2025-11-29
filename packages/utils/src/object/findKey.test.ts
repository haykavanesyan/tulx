import { describe, it, expect } from 'vitest';
import { findKey } from './findKey';

describe('findKey', () => {
  it('should find first key matching predicate', () => {
    const users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    };
    expect(findKey(users, (o) => o.age < 40)).toBe('barney');
  });
});
