import { describe, it, expect } from 'vitest';

import { extendWith } from './extendWith';

describe('extendWith', () => {
  it('should extend with customizer', () => {
    function customizer(objValue: unknown, srcValue: unknown) {
      return objValue === undefined ? srcValue : objValue;
    }
    const result = extendWith({ a: 1 }, [{ b: 2 }], customizer);
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
