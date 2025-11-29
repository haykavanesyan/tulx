import { describe, it, expect } from 'vitest';
import { stubString } from './stubString';

describe('stubString', () => {
  it('should return empty string', () => {
    expect(stubString()).toBe('');
  });
});
