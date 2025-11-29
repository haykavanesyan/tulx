import { describe, it, expect } from 'vitest';

import { invokeMap } from './invoke-map';

describe('invokeMap', () => {
  it('should invoke method at path', () => {
    const result = invokeMap(
      [
        [5, 1, 7],
        [3, 2, 1],
      ],
      'sort'
    );
    expect(result).toEqual([
      [1, 5, 7],
      [1, 2, 3],
    ]);
  });

  it('should invoke function with args', () => {
    const result = invokeMap(
      ['123', '456'],
      (str: string) => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        return str.split.bind(str);
      },
      ''
    );
    expect(result).toEqual([
      ['1', '2', '3'],
      ['4', '5', '6'],
    ]);
  });

  it('should work with objects', () => {
    const obj = {
      a: [5, 1, 7],
      b: [3, 2, 1],
    };
    const result = invokeMap(obj, 'sort');
    expect(result).toEqual([
      [1, 5, 7],
      [1, 2, 3],
    ]);
  });

  it('should return undefined for non-function methods', () => {
    const result = invokeMap([{ a: 1 }], 'a');
    expect(result).toEqual([undefined]);
  });

  it('should handle empty array', () => {
    expect(invokeMap([], 'sort')).toEqual([]);
  });
});
