import { describe, it, expect } from 'vitest';
import { over } from './over';

describe('over', () => {
  it('should invoke iteratees with arguments', () => {
    const func = over([Math.max, Math.min]);
    expect(func(1, 2, 3, 4)).toEqual([4, 1]);
  });
});
