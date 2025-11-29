import { describe, it, expect } from 'vitest';

import { cond } from './cond';
import { matches } from './matches';
import { stubTrue } from './stub-true';

describe('cond', () => {
  it('should invoke first matching predicate', () => {
    const func = cond([
      [matches({ user: 'barney' }), () => 'A'],
      [matches({ age: 36 }), () => 'B'],
      [stubTrue, () => 'C'],
    ]);
    expect(func({ user: 'barney', active: false })).toBe('A');
    expect(func({ user: 'fred', age: 36 })).toBe('B');
    expect(func({ user: 'pebbles', age: 1 })).toBe('C');
  });
});
