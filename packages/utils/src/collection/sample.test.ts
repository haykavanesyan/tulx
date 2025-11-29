import { describe, it, expect } from 'vitest';

import { sample } from './sample';

describe('sample', () => {
  it('should return random element from array', () => {
    const array = [1, 2, 3, 4];
    const result = sample(array);
    expect(array).toContain(result);
  });

  it('should return random element from object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = sample(obj);
    expect(Object.values(obj)).toContain(result);
  });

  it('should return undefined for empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return undefined for empty object', () => {
    expect(sample({})).toBeUndefined();
  });

  it('should return element from single element array', () => {
    expect(sample([42])).toBe(42);
  });
});
