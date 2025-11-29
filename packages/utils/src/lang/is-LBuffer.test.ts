import { describe, it, expect } from 'vitest';
import { isBuffer } from './isBuffer';

describe('isBuffer', () => {
  it('should return false in browser environments', () => {
    // In browser, Buffer is undefined
    expect(isBuffer({})).toBe(false);
  });

  it('should return false for non-buffers', () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false);
    expect(isBuffer(null)).toBe(false);
  });
});
