import { describe, it, expect } from 'vitest';

import { isSet } from './is-LSet';

describe('isSet', () => {
  it('should return true for Set objects', () => {
    expect(isSet(new Set())).toBe(true);
  });

  it('should return false for WeakSet', () => {
    expect(isSet(new WeakSet())).toBe(false);
  });

  it('should return false for non-sets', () => {
    expect(isSet({})).toBe(false);
    expect(isSet(null)).toBe(false);
  });
});
