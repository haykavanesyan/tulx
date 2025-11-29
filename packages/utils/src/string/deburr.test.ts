import { describe, it, expect } from 'vitest';

import { deburr } from './deburr';

describe('deburr', () => {
  it('should deburr string', () => {
    expect(deburr('déjà vu')).toBe('deja vu');
  });
});
