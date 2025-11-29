import { describe, it, expect } from 'vitest';

import { extend } from './extend';

describe('extend', () => {
  it('should extend object with sources', () => {
    const result = extend({ a: 1 }, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
