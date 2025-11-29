import { describe, it, expect } from 'vitest';

import { defaultTo } from './default-to';

describe('defaultTo', () => {
  it('should return value if not null/undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  it('should return default if null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  it('should return default if undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });
});
