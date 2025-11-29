import { describe, it, expect } from 'vitest';
import { join } from './join';

describe('join', () => {
  it('should join array with separator', () => {
    expect(join(['a', 'b', 'c'], '~')).toBe('a~b~c');
  });

  it('should use comma as default separator', () => {
    expect(join(['a', 'b', 'c'])).toBe('a,b,c');
  });

  it('should handle empty array', () => {
    expect(join([])).toBe('');
  });

  it('should handle single element', () => {
    expect(join(['a'])).toBe('a');
  });

  it('should handle empty separator', () => {
    expect(join(['a', 'b', 'c'], '')).toBe('abc');
  });

  it('should work with numbers', () => {
    expect(join([1, 2, 3], '-')).toBe('1-2-3');
  });

  it('should convert values to strings', () => {
    expect(join([null, undefined, true, false], ',')).toBe(',,true,false');
  });

  it('should handle mixed types', () => {
    expect(join([1, 'a', true], '|')).toBe('1|a|true');
  });
});
