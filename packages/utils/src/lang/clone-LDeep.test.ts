import { describe, it, expect } from 'vitest';

import { cloneDeep } from './clone-LDeep';

describe('cloneDeep', () => {
  it('should return same value for primitives', () => {
    expect(cloneDeep(1)).toBe(1);
    expect(cloneDeep('abc')).toBe('abc');
    expect(cloneDeep(null)).toBe(null);
  });

  it('should create deep clone of array', () => {
    const objects = [{ a: 1 }, { b: 2 }];
    const deep = cloneDeep(objects);
    expect(deep).not.toBe(objects);
    expect(deep).toEqual(objects);
    expect(deep[0]).not.toBe(objects[0]); // Different reference
  });

  it('should create deep clone of object', () => {
    const obj = { a: { b: { c: 1 } } };
    const cloned = cloneDeep(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.a).not.toBe(obj.a);
    expect(cloned.a.b).not.toBe(obj.a.b);
  });

  it('should clone Date objects', () => {
    const date = new Date();
    const cloned = cloneDeep(date);
    expect(cloned).not.toBe(date);
    expect(cloned.getTime()).toBe(date.getTime());
  });

  it('should clone RegExp objects', () => {
    const regex = /test/gi;
    const cloned = cloneDeep(regex);
    expect(cloned).not.toBe(regex);
    expect(cloned.source).toBe(regex.source);
    expect(cloned.flags).toBe(regex.flags);
  });
});
