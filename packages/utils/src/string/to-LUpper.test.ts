import { describe, it, expect } from 'vitest';
import { toUpper } from './toUpper';

describe('toUpper', () => {
  it('should convert to upper case', () => {
    expect(toUpper('--foo-bar--')).toBe('--FOO-BAR--');
    expect(toUpper('fooBar')).toBe('FOOBAR');
  });
});
