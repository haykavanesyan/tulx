import { describe, it, expect } from 'vitest';
import { noop } from './noop';

describe('noop', () => {
  it('should return undefined', () => {
    const object = { user: 'fred' };
    expect(noop(object)).toBeUndefined();
  });
});
