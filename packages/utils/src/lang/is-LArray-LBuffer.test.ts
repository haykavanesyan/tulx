import { describe, it, expect } from 'vitest';

import { isArrayBuffer } from './is-LArray-LBuffer';

describe('isArrayBuffer', () => {
  it('should return true for ArrayBuffer', () => {
    expect(isArrayBuffer(new ArrayBuffer(2))).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isArrayBuffer(new Array(2))).toBe(false);
  });

  it('should return false for non-arraybuffers', () => {
    expect(isArrayBuffer({})).toBe(false);
    expect(isArrayBuffer(null)).toBe(false);
  });
});
