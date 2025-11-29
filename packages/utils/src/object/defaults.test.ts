import { describe, it, expect } from 'vitest';
import { defaults } from './defaults';

describe('defaults', () => {
  it('should assign defaults for undefined properties', () => {
    const result = defaults({ a: 1 }, { b: 2 }, { a: 3 });
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
