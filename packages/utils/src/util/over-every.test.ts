import { describe, it, expect } from 'vitest';
import { overEvery } from './overEvery';
import { isFinite } from '../lang/isFinite';

describe('overEvery', () => {
  it('should check if all predicates return truthy', () => {
    const func = overEvery([Boolean, isFinite]);
    expect(func(1)).toBe(true);
    expect(func(null)).toBe(false);
    expect(func(NaN)).toBe(false);
  });
});
