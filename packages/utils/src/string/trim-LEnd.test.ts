import { describe, it, expect } from 'vitest';

import { trimEnd } from './trim-LEnd';

describe('trimEnd', () => {
  it('should trim trailing whitespace', () => {
    expect(trimEnd('  abc  ')).toBe('  abc');
  });

  it('should trim specified characters', () => {
    expect(trimEnd('-_-abc-_-', '_-')).toBe('-_-abc');
  });
});
