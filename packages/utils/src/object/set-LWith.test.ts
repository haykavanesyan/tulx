import { describe, it, expect } from 'vitest';
import { setWith } from './setWith';

describe('setWith', () => {
  it('should set value with customizer', () => {
    const object = {};
    setWith(object, '[0][1]', 'a', Object);
    expect(object).toEqual({ '0': { '1': 'a' } });
  });
});
