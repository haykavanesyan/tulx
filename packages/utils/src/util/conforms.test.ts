import { describe, it, expect } from 'vitest';

import { conforms } from './conforms';

describe('conforms', () => {
  it('should check if object conforms to source', () => {
    const objects = [
      { a: 2, b: 1 },
      { a: 1, b: 2 },
    ];
    const predicate = conforms({ b: (n: number) => n > 1 });
    expect(predicate(objects[0])).toBe(false);
    expect(predicate(objects[1])).toBe(true);
  });
});
