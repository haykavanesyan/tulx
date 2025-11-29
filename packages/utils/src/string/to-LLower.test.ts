import { describe, it, expect } from 'vitest';
import { toLower } from './toLower';

describe('toLower', () => {
  it('should convert to lower case', () => {
    expect(toLower('--Foo-Bar--')).toBe('--foo-bar--');
    expect(toLower('fooBar')).toBe('foobar');
  });
});
