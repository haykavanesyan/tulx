import { describe, it, expect } from 'vitest';
import { times } from './times';

describe('times', () => {
  it('should invoke iteratee n times', () => {
    expect(times(3, String)).toEqual(['0', '1', '2']);
    expect(times(4, () => 0)).toEqual([0, 0, 0, 0]);
  });
});
