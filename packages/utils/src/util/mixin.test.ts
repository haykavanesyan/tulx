import { describe, it, expect } from 'vitest';
import { mixin } from './mixin';

describe('mixin', () => {
  it('should add functions to object', () => {
    function vowels(string: string) {
      return string.match(/[aeiou]/g);
    }
    const result = mixin({}, { vowels });
    expect(typeof result.vowels).toBe('function');
  });
});
