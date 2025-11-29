import { describe, it, expect } from 'vitest';
import { overSome } from './overSome';
import { isFinite } from '../lang/isFinite';

describe('overSome', () => {
  it('should check if any predicate returns truthy', () => {
    const func = overSome([Boolean, isFinite]);
    expect(func(1)).toBe(true);
    expect(func(null)).toBe(false); // Both Boolean(null) and isFinite(null) are false
    expect(func(NaN)).toBe(false);
  });
});
