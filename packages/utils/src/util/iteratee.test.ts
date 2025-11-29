import { describe, it, expect } from 'vitest';
import { iteratee } from './iteratee';

describe('iteratee', () => {
  it('should return function as-is', () => {
    const func = (x: number) => x * 2;
    expect(iteratee(func)(5)).toBe(10);
  });

  it('should create property accessor', () => {
    const users = [{ user: 'barney' }, { user: 'fred' }];
    const result = users.map(iteratee('user'));
    expect(result).toEqual(['barney', 'fred']);
  });

  it('should create matcher for object', () => {
    const predicate = iteratee({ a: 1, b: 2 });
    expect(predicate({ a: 1, b: 2 })).toBe(true);
    expect(predicate({ a: 1, b: 3 })).toBe(false);
  });
});
