import { describe, it, expect } from 'vitest';

import { cloneWith } from './clone-LWith';

describe('cloneWith', () => {
  it('should use customizer when provided', () => {
    function customizer(value: unknown) {
      if (typeof value === 'object' && value !== null) {
        return { a: 'HELLO' };
      }
    }
    const cloned = cloneWith({ a: 'hello' }, customizer);
    expect(cloned).toEqual({ a: 'HELLO' });
  });

  it('should fall back to default clone when customizer returns undefined', () => {
    const customizer = () => undefined;
    const obj = { a: 1 };
    const cloned = cloneWith(obj, customizer);
    expect(cloned).not.toBe(obj);
    expect(cloned).toEqual(obj);
  });
});
