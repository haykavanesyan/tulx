import { describe, it, expect } from 'vitest';

import { identity } from './identity';

describe('identity', () => {
  it('should return first argument', () => {
    const object = { a: 1 };
    expect(identity(object)).toBe(object);
  });
});
