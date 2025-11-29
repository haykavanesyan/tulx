import { describe, it, expect } from 'vitest';

import { countBy } from './count-by';

describe('countBy', () => {
  it('should count by iteratee function', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
  });

  it('should count by property path', () => {
    expect(countBy(['one', 'two', 'three'], 'length')).toEqual({
      '3': 2,
      '5': 1,
    });
  });

  it('should work with objects', () => {
    expect(countBy({ a: 6.1, b: 4.2, c: 6.3 }, Math.floor)).toEqual({
      '4': 1,
      '6': 2,
    });
  });

  it('should handle empty array', () => {
    expect(countBy([], Math.floor)).toEqual({});
  });

  it('should handle empty object', () => {
    expect(countBy({}, Math.floor)).toEqual({});
  });
});
