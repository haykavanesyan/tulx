import { describe, it, expect } from 'vitest';
import { methodOf } from './methodOf';

describe('methodOf', () => {
  it('should invoke method at path of object', () => {
    const obj = { a: { b: () => 3 } };
    const methodOfObj = methodOf(obj);
    expect(methodOfObj('a.b')).toBe(3);
  });
});
