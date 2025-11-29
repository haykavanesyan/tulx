import { describe, it, expect } from 'vitest';

import { assignInWith } from './assign-LIn-LWith';

describe('assignInWith', () => {
  it('should assign with customizer', () => {
    function customizer(objValue: unknown, srcValue: unknown) {
      return objValue === undefined ? srcValue : objValue;
    }
    const object = {};
    assignInWith(object, [{ a: 1 }, { b: 2 }], customizer);
    expect(object).toEqual({ a: 1, b: 2 });
  });
});
