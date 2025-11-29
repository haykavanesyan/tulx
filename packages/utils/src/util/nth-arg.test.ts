import { describe, it, expect } from 'vitest';

import { nthArg } from './nth-arg';

describe('nthArg', () => {
  it('should return argument at index', () => {
    const func = nthArg(1);
    expect(func('a', 'b', 'c', 'd')).toBe('b');
  });

  it('should handle negative index', () => {
    const func = nthArg(-1);
    expect(func('a', 'b', 'c', 'd')).toBe('d');
  });
});
