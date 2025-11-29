import { describe, it, expect } from 'vitest';
import { toPath } from './to-path';

describe('toPath', () => {
  it('should convert string to path array', () => {
    expect(toPath('a.b.c')).toEqual(['a', 'b', 'c']);
    expect(toPath('a[0].b.c')).toEqual(['a', '0', 'b', 'c']);
  });

  it('should return array as-is', () => {
    expect(toPath(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });
});
