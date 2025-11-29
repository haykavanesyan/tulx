import { describe, it, expect } from 'vitest';
import { matchesProperty } from './matchesProperty';

describe('matchesProperty', () => {
  it('should create property matcher', () => {
    const objects = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ];
    const predicate = matchesProperty('a', 4);
    expect(predicate(objects[0])).toBe(false);
    expect(predicate(objects[1])).toBe(true);
  });
});
