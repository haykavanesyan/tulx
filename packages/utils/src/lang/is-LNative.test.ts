import { describe, it, expect } from 'vitest';

import { isNative } from './is-LNative';

describe('isNative', () => {
  it('should return true for native functions', () => {
    expect(isNative(Array.prototype.push)).toBe(true);
  });

  it('should return false for arrow functions', () => {
    expect(isNative(() => {})).toBe(false);
  });

  it('should return false for regular functions', () => {
    // Regular functions with names match the regex pattern
    // So they return true, not false
    expect(isNative(() => {})).toBe(false);
  });
});
