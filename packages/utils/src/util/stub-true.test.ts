import { describe, it, expect } from 'vitest';

import { stubTrue } from './stub-true';

describe('stubTrue', () => {
  it('should return true', () => {
    expect(stubTrue()).toBe(true);
  });
});
