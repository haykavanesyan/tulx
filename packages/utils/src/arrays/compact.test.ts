import { describe, it, expect } from 'vitest';
import { compact } from './compact';

describe('compact', () => {
  it('should remove falsy values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  it('should remove null and undefined', () => {
    expect(compact([1, null, 2, undefined, 3])).toEqual([1, 2, 3]);
  });

  it('should remove NaN', () => {
    expect(compact([1, NaN, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should remove false', () => {
    expect(compact([true, false, true])).toEqual([true, true]);
  });

  it('should remove empty strings', () => {
    expect(compact(['a', '', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should keep truthy values', () => {
    expect(compact([1, 'a', true, {}, []])).toEqual([1, 'a', true, {}, []]);
  });

  it('should return empty array for all falsy values', () => {
    expect(compact([0, false, null, undefined, '', NaN])).toEqual([]);
  });

  it('should return empty array for empty input', () => {
    expect(compact([])).toEqual([]);
  });

  it('should work with mixed types', () => {
    expect(compact([0, 'hello', null, 42, false, 'world'])).toEqual([
      'hello',
      42,
      'world',
    ]);
  });

  it('should preserve object references', () => {
    const obj = { a: 1 };
    const arr = [null, obj, undefined];
    const result = compact(arr);
    expect(result[0]).toBe(obj);
  });
});
