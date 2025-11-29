import { describe, it, expect } from 'vitest';

import { replace } from './replace';

describe('replace', () => {
  it('should replace pattern in string', () => {
    expect(replace('Hi Fred', 'Fred', 'Barney')).toBe('Hi Barney');
  });
});
