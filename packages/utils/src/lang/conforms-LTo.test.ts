import { describe, it, expect } from 'vitest';
import { conformsTo } from './conformsTo';

describe('conformsTo', () => {
  it('should return true when object conforms', () => {
    const object = { a: 1, b: 2 };
    expect(conformsTo(object, { b: (n: number) => n > 1 })).toBe(true);
  });

  it('should return false when object does not conform', () => {
    const object = { a: 1, b: 2 };
    expect(conformsTo(object, { b: (n: number) => n > 2 })).toBe(false);
  });

  it('should check all predicates', () => {
    const object = { a: 1, b: 2 };
    expect(
      conformsTo(object, { a: (n: number) => n > 0, b: (n: number) => n > 1 })
    ).toBe(true);
    expect(
      conformsTo(object, { a: (n: number) => n > 1, b: (n: number) => n > 1 })
    ).toBe(false);
  });
});
