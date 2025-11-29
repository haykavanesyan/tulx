import { describe, it, expect } from 'vitest';

import { assignWith } from './assign-LWith';

describe('assignWith', () => {
  it('should use customizer for assigned values', () => {
    function customizer(objValue: unknown, srcValue: unknown) {
      return objValue === undefined ? srcValue : objValue;
    }
    const object = {};
    assignWith(object, [{ a: 1 }, { b: 2 }], customizer);
    expect(object).toEqual({ a: 1, b: 2 });
  });
});
