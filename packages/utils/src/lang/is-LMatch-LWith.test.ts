import { describe, it, expect } from 'vitest';

import { isMatchWith } from './is-LMatch-LWith';

describe('isMatchWith', () => {
  it('should use customizer when provided', () => {
    function isGreeting(value: unknown) {
      return /^h(?:i|ello)$/.test(String(value));
    }
    function customizer(objValue: unknown, srcValue: unknown) {
      if (isGreeting(objValue) && isGreeting(srcValue)) {
        return true;
      }
    }
    const object = { greeting: 'hello' };
    const source = { greeting: 'hi' };
    expect(isMatchWith(object, source, customizer)).toBe(true);
  });

  it('should fall back to default comparison when customizer returns undefined', () => {
    const customizer = () => undefined;
    const object = { a: 1 };
    const source = { a: 1 };
    expect(isMatchWith(object, source, customizer)).toBe(true);
  });
});
