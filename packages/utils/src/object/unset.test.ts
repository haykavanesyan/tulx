import { describe, it, expect } from 'vitest';
import { unset } from './unset';

describe('unset', () => {
  it('should remove property at path', () => {
    const object = { a: [{ b: { c: 7 } }] };
    expect(unset(object, 'a[0].b.c')).toBe(true);
    expect((object.a as any)[0].b).toEqual({});
  });
});
