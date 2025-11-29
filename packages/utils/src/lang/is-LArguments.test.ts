import { describe, it, expect } from 'vitest';

import { isArguments } from './is-LArguments';

describe('isArguments', () => {
  it('should return true for arguments object', () => {
    // Create a mock arguments object
    const args = { 0: 1, 1: 2, length: 2, callee() {} };
    expect(isArguments(args)).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });

  it('should return false for non-arguments', () => {
    expect(isArguments({})).toBe(false);
    expect(isArguments(null)).toBe(false);
  });
});
