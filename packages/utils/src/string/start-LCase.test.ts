import { describe, it, expect } from 'vitest';
import { startCase } from './startCase';

describe('startCase', () => {
  it('should convert to start case', () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar');
    expect(startCase('fooBar')).toBe('Foo Bar');
  });
});
