import { describe, it, expect } from 'vitest';
import { fromPairs } from './from-pairs';

describe('fromPairs', () => {
  it('should create object from key-value pairs', () => {
    expect(
      fromPairs([
        ['a', 1],
        ['b', 2],
      ])
    ).toEqual({ a: 1, b: 2 });
  });

  it('should handle numeric keys', () => {
    expect(
      fromPairs([
        [1, 'a'],
        [2, 'b'],
      ])
    ).toEqual({ '1': 'a', '2': 'b' });
  });

  it('should handle empty array', () => {
    expect(fromPairs([])).toEqual({});
  });

  it('should convert numeric keys to strings', () => {
    expect(
      fromPairs([
        [0, 'zero'],
        [1, 'one'],
      ])
    ).toEqual({ '0': 'zero', '1': 'one' });
  });

  it('should handle duplicate keys (last wins)', () => {
    expect(
      fromPairs([
        ['a', 1],
        ['a', 2],
      ])
    ).toEqual({ a: 2 });
  });

  it('should work with different value types', () => {
    expect(
      fromPairs([
        ['a', 1],
        ['b', 'string'],
        ['c', true],
        ['d', null],
      ])
    ).toEqual({
      a: 1,
      b: 'string',
      c: true,
      d: null,
    });
  });

  it('should work with object values', () => {
    const obj = { nested: 'value' };
    expect(fromPairs([['key', obj]])).toEqual({ key: obj });
  });
});
