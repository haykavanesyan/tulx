import { describe, it, expect } from 'vitest';

import { isFinite } from '../lang/is-LFinite';

import { overEvery } from './over-every';

describe('overEvery', () => {
  it('should check if all predicates return truthy', () => {
    const func = overEvery([Boolean, isFinite]);
    expect(func(1)).toBe(true);
    expect(func(null)).toBe(false);
    expect(func(NaN)).toBe(false);
  });
});
