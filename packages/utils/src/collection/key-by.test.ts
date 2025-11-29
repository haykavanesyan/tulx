import { describe, it, expect } from 'vitest';
import { keyBy } from './key-by';

describe('keyBy', () => {
  it('should create object keyed by iteratee function', () => {
    const array = [
      { dir: 'left', code: 97 },
      { dir: 'right', code: 100 },
    ];
    const result = keyBy(array, (o) => String.fromCharCode(o.code));
    expect(result).toEqual({
      a: { dir: 'left', code: 97 },
      d: { dir: 'right', code: 100 },
    });
  });

  it('should create object keyed by property path', () => {
    const array = [
      { dir: 'left', code: 97 },
      { dir: 'right', code: 100 },
    ];
    expect(keyBy(array, 'dir')).toEqual({
      left: { dir: 'left', code: 97 },
      right: { dir: 'right', code: 100 },
    });
  });

  it('should work with objects', () => {
    const obj = { a: { x: 1 }, b: { x: 2 } };
    expect(keyBy(obj, 'x')).toEqual({ '1': { x: 1 }, '2': { x: 2 } });
  });

  it('should handle empty array', () => {
    expect(keyBy([], (o) => o.x)).toEqual({});
  });

  it('should use last value for duplicate keys', () => {
    const array = [{ x: 1 }, { x: 1 }];
    const result = keyBy(array, 'x');
    expect(result['1']).toEqual({ x: 1 });
  });
});
