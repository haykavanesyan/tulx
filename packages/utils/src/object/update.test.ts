import { describe, it, expect } from 'vitest';
import { update } from './update';

describe('update', () => {
  it('should update value at path with updater', () => {
    const object = { a: [{ b: { c: 3 } }] };
    update(object, 'a[0].b.c', (n) => (n as number) * (n as number));
    expect((object.a as any)[0].b.c).toBe(9);
  });
});
