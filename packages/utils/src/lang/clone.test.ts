import { describe, it, expect } from 'vitest';
import { clone } from './clone';

describe('clone', () => {
  it('should return same value for primitives', () => {
    expect(clone(1)).toBe(1);
    expect(clone('abc')).toBe('abc');
    expect(clone(null)).toBe(null);
    expect(clone(true)).toBe(true);
  });

  it('should create shallow clone of array', () => {
    const objects = [{ a: 1 }, { b: 2 }];
    const shallow = clone(objects);
    expect(shallow).not.toBe(objects);
    expect(shallow).toEqual(objects);
    expect(shallow[0]).toBe(objects[0]); // Same reference
  });

  it('should create shallow clone of object', () => {
    const obj = { a: 1, b: 2 };
    const cloned = clone(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned).toEqual(obj);
  });
});
