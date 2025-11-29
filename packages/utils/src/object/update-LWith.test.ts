import { describe, it, expect } from 'vitest';
import { updateWith } from './updateWith';

describe('updateWith', () => {
  it('should update with customizer', () => {
    const object = {};
    updateWith(object, '[0][1]', () => 'a', Object);
    expect(object).toEqual({ '0': { '1': 'a' } });
  });
});
