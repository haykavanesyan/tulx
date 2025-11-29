import { describe, it, expect } from 'vitest';

import { has } from './has';

describe('has', () => {
  it('should check if path exists', () => {
    const object = { a: { b: 2 } };
    expect(has(object, 'a')).toBe(true);
    expect(has(object, 'a.b')).toBe(true);
    expect(has(object, ['a', 'b'])).toBe(true);
    expect(has(object, 'c')).toBe(false);
  });
});
