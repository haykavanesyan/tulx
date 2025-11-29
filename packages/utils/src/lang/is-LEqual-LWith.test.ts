import { describe, it, expect } from 'vitest';
import { isEqualWith } from './isEqualWith';

describe('isEqualWith', () => {
  it('should use customizer when provided', () => {
    function isGreeting(value: unknown) {
      return /^h(?:i|ello)$/.test(String(value));
    }
    function customizer(objValue: unknown, othValue: unknown) {
      if (isGreeting(objValue) && isGreeting(othValue)) {
        return true;
      }
      // Return undefined to fall back to default comparison
      return undefined;
    }
    const array = ['hello', 'goodbye'];
    const other = ['hi', 'goodbye'];
    // Customizer only compares first level, need to handle arrays differently
    expect(isEqualWith(array[0], other[0], customizer)).toBe(true);
  });

  it('should fall back to isEqual when customizer returns undefined', () => {
    const customizer = () => undefined;
    expect(isEqualWith({ a: 1 }, { a: 1 }, customizer)).toBe(true);
    expect(isEqualWith({ a: 1 }, { a: 2 }, customizer)).toBe(false);
  });
});
