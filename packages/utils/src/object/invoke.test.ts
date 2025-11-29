import { describe, it, expect } from 'vitest';
import { invoke } from './invoke';

describe('invoke', () => {
  it('should invoke method at path', () => {
    const object = { a: [{ b: { c: () => 3 } }] };
    expect(invoke(object, 'a[0].b.c')).toBe(3);
  });

  it('should invoke method with arguments', () => {
    const object = { a: { b: { c: (x: number, y: number) => x + y } } };
    expect(invoke(object, 'a.b.c', 1, 2)).toBe(3);
  });
});
