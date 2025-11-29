import { describe, it, expect } from 'vitest';

import { property } from './property';

describe('property', () => {
  it('should get value at path', () => {
    const objects = [{ a: { b: 2 } }, { a: { b: 1 } }];
    const result = objects.map(property('a.b'));
    expect(result).toEqual([2, 1]);
  });
});
