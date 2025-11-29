import { describe, it, expect } from 'vitest';

import { get } from './get';

describe('get', () => {
  it('should get value at path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should return default value for undefined paths', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });
});
