import { describe, it, expect } from 'vitest';

import { isFunction } from './is-LFunction';

describe('isFunction', () => {
  it('should return true for functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
  });

  it('should return false for non-functions', () => {
    expect(isFunction(/abc/)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(null)).toBe(false);
  });
});
