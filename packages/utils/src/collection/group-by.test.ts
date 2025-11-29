import { describe, it, expect } from 'vitest';

import { groupBy } from './group-by';

describe('groupBy', () => {
  it('should group by iteratee function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
      '4': [4.2],
      '6': [6.1, 6.3],
    });
  });

  it('should group by property path', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({
      '3': ['one', 'two'],
      '5': ['three'],
    });
  });

  it('should work with objects', () => {
    expect(groupBy({ a: 6.1, b: 4.2, c: 6.3 }, Math.floor)).toEqual({
      '4': [4.2],
      '6': [6.1, 6.3],
    });
  });

  it('should handle empty array', () => {
    expect(groupBy([], Math.floor)).toEqual({});
  });

  it('should preserve order', () => {
    const result = groupBy([6.1, 4.2, 6.3], Math.floor);
    expect(result['6']).toEqual([6.1, 6.3]);
  });
});
