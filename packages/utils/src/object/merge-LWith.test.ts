import { describe, it, expect } from 'vitest';

import { mergeWith } from './merge-LWith';

describe('mergeWith', () => {
  it('should merge with customizer', () => {
    function customizer(objValue: unknown, srcValue: unknown) {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }
    const object = { a: [1], b: [2] };
    const other = { a: [3], b: [4] };
    mergeWith(object, [other], customizer);
    expect(object).toEqual({ a: [1, 3], b: [2, 4] });
  });
});
