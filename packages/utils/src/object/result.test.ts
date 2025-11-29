import { describe, it, expect } from 'vitest';
import { result } from './result';

describe('result', () => {
  it('should return value at path', () => {
    const object = { a: { b: 2 } };
    expect(result(object, 'a.b')).toBe(2);
  });

  it('should invoke function at path', () => {
    const object = { a: { b: () => 3 } };
    expect(result(object, 'a.b')).toBe(3);
  });

  it('should return default value', () => {
    const object = { a: { b: 2 } };
    expect(result(object, 'a.c', 'default')).toBe('default');
  });
});
