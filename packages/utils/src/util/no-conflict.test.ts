import { describe, it, expect } from 'vitest';

import { noConflict } from './no-conflict';

describe('noConflict', () => {
  it('should return globalThis', () => {
    expect(noConflict()).toBe(globalThis);
  });
});
