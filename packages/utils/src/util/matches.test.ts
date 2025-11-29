import { describe, it, expect } from 'vitest';
import { matches } from './matches';

describe('matches', () => {
  it('should create matcher function', () => {
    const objects = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ];
    const predicate = matches({ a: 4, c: 6 });
    expect(predicate(objects[0])).toBe(false);
    expect(predicate(objects[1])).toBe(true);
  });
});
