import { describe, it, expect } from 'vitest';
import { stubObject } from './stubObject';

describe('stubObject', () => {
  it('should return new empty object', () => {
    const objects = [stubObject(), stubObject()];
    expect(objects).toEqual([{}, {}]);
    expect(objects[0]).not.toBe(objects[1]);
  });
});
