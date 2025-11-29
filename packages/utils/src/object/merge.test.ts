import { describe, it, expect } from 'vitest';
import { merge } from './merge';

describe('merge', () => {
  it('should recursively merge objects', () => {
    const object = {
      a: { b: 2 },
    };
    const other = {
      a: { c: 3 },
    };
    merge(object, other);
    expect(object).toEqual({ a: { b: 2, c: 3 } });
  });
});
