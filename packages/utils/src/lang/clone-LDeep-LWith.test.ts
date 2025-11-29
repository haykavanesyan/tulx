import { describe, it, expect } from 'vitest';

import { cloneDeepWith } from './clone-LDeep-LWith';

describe('cloneDeepWith', () => {
  it('should use customizer when provided', () => {
    function customizer(value: unknown) {
      if (typeof value === 'string') {
        return value.toUpperCase();
      }
    }
    const cloned = cloneDeepWith({ a: 'hello' }, customizer);
    expect(cloned).toEqual({ a: 'HELLO' });
  });

  it('should fall back to default cloneDeep when customizer returns undefined', () => {
    const customizer = () => undefined;
    const obj = { a: { b: 1 } };
    const cloned = cloneDeepWith(obj, customizer);
    expect(cloned).not.toBe(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.a).not.toBe(obj.a);
  });
});
