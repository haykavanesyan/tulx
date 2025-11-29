import { describe, it, expect } from 'vitest';
import { stubTrue } from './stubTrue';

describe('stubTrue', () => {
  it('should return true', () => {
    expect(stubTrue()).toBe(true);
  });
});
