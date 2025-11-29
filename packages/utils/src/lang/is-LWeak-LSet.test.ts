import { describe, it, expect } from 'vitest';

import { isWeakSet } from './is-LWeak-LSet';

describe('isWeakSet', () => {
  it('should return true for WeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });

  it('should return false for Set', () => {
    expect(isWeakSet(new Set())).toBe(false);
  });

  it('should return false for non-sets', () => {
    expect(isWeakSet({})).toBe(false);
    expect(isWeakSet(null)).toBe(false);
  });
});
