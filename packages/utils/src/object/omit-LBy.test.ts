import { describe, it, expect } from 'vitest';
import { omitBy } from './omitBy';

describe('omitBy', () => {
  it('should omit properties by predicate', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(omitBy(object, (value) => typeof value === 'number')).toEqual({
      b: '2',
    });
  });
});
