import { describe, it, expect } from 'vitest';
import { set } from './set';

describe('set', () => {
  it('should set value at path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    set(object, 'a[0].b.c', 4);
    expect((object.a as any)[0].b.c).toBe(4);
  });
});
