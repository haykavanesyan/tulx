import { describe, it, expect } from 'vitest';
import { method } from './method';

describe('method', () => {
  it('should invoke method at path', () => {
    const objects = [{ a: { b: () => 2 } }, { a: { b: () => 1 } }];
    const result = objects.map(method('a.b'));
    expect(result).toEqual([2, 1]);
  });
});
