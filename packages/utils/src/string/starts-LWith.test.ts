import { describe, it, expect } from 'vitest';

import { startsWith } from './starts-LWith';

describe('startsWith', () => {
  it('should check if string starts with target', () => {
    expect(startsWith('abc', 'a')).toBe(true);
    expect(startsWith('abc', 'b')).toBe(false);
    expect(startsWith('abc', 'b', 1)).toBe(true);
  });
});
