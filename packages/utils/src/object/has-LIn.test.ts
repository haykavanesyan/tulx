import { describe, it, expect } from 'vitest';
import { hasIn } from './hasIn';

describe('hasIn', () => {
  it('should check if path exists (own or inherited)', () => {
    const object = Object.create({ a: Object.create({ b: 2 }) });
    expect(hasIn(object, 'a')).toBe(true);
    expect(hasIn(object, 'a.b')).toBe(true);
    expect(hasIn(object, 'b')).toBe(false);
  });
});
