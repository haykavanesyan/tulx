import { describe, it, expect } from 'vitest';

import { toLength } from './to-LLength';

describe('toLength', () => {
  it('should convert numbers to length', () => {
    expect(toLength(3.2)).toBe(3);
    expect(toLength(-3.2)).toBe(0);
  });

  it('should clamp to 4294967295', () => {
    // toLength uses toInteger which returns 0 for Infinity
    expect(toLength(Infinity)).toBe(0);
    expect(toLength(Number.MIN_VALUE)).toBe(0);
    expect(toLength(5000000000)).toBe(4294967295);
  });

  it('should convert strings to length', () => {
    expect(toLength('3.2')).toBe(3);
  });
});
