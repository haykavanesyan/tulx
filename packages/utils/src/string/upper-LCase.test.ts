import { describe, it, expect } from 'vitest';
import { upperCase } from './upperCase';

describe('upperCase', () => {
  it('should convert to upper case', () => {
    expect(upperCase('--foo-bar--')).toBe('FOO BAR');
    expect(upperCase('fooBar')).toBe('FOO BAR');
  });
});
