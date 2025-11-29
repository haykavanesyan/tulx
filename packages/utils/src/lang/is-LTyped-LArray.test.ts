import { describe, it, expect } from 'vitest';

import { isTypedArray } from './is-LTyped-LArray';

describe('isTypedArray', () => {
  it('should return true for typed arrays', () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
    expect(isTypedArray(new Int8Array())).toBe(true);
    expect(isTypedArray(new Float32Array())).toBe(true);
  });

  it('should return false for regular arrays', () => {
    expect(isTypedArray([])).toBe(false);
  });

  it('should return false for non-arrays', () => {
    expect(isTypedArray({})).toBe(false);
    expect(isTypedArray(null)).toBe(false);
  });
});
