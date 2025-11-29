import { describe, it, expect } from 'vitest';
import { split } from './split';

describe('split', () => {
  it('should split string by separator', () => {
    expect(split('a-b-c', '-', 2)).toEqual(['a', 'b']);
    expect(split('a-b-c', '-')).toEqual(['a', 'b', 'c']);
  });
});
