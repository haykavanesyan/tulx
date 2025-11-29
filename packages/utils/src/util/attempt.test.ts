import { describe, it, expect } from 'vitest';

import { attempt } from './attempt';

describe('attempt', () => {
  it('should return result on success', () => {
    const result = attempt(() => 42);
    expect(result).toBe(42);
  });

  it('should return error on failure', () => {
    const result = attempt(() => {
      throw new Error('test');
    });
    expect(result).toBeInstanceOf(Error);
  });
});
