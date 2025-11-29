import { describe, it, expect } from 'vitest';
import { defaultsDeep } from './defaultsDeep';

describe('defaultsDeep', () => {
  it('should recursively assign defaults', () => {
    const result = defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
    expect(result).toEqual({ a: { b: 2, c: 3 } });
  });
});
