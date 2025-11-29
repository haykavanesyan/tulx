import { describe, it, expect } from 'vitest';
import { findLastKey } from './findLastKey';

describe('findLastKey', () => {
  it('should find last key matching predicate', () => {
    const users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    };
    expect(findLastKey(users, (o) => o.age < 40)).toBe('pebbles');
  });
});
