import { describe, it, expect } from 'vitest';

import { constant } from './constant';

describe('constant', () => {
  it('should return constant value', () => {
    const constFunc = constant({ a: 1 });
    const objects = [constFunc(), constFunc()];
    expect(objects[0]).toEqual({ a: 1 });
    expect(objects[1]).toEqual({ a: 1 });
    expect(objects[0]).toBe(objects[1]); // Same reference
  });
});
