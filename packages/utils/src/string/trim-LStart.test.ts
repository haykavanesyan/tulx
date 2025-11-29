import { describe, it, expect } from 'vitest';

import { trimStart } from './trim-LStart';

describe('trimStart', () => {
  it('should trim leading whitespace', () => {
    expect(trimStart('  abc  ')).toBe('abc  ');
  });

  it('should trim specified characters', () => {
    expect(trimStart('-_-abc-_-', '_-')).toBe('abc-_-');
  });
});
