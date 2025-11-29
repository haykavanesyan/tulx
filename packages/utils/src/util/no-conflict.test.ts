import { describe, it, expect } from 'vitest';
import { noConflict } from './noConflict';

describe('noConflict', () => {
  it('should return globalThis', () => {
    expect(noConflict()).toBe(globalThis);
  });
});
