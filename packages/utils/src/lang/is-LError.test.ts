import { describe, it, expect } from 'vitest';

import { isError } from './is-LError';

describe('isError', () => {
  it('should return true for Error objects', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError(new TypeError())).toBe(true);
    expect(isError(new ReferenceError())).toBe(true);
  });

  it('should return false for Error constructor', () => {
    expect(isError(Error)).toBe(false);
  });

  it('should return false for non-errors', () => {
    expect(isError('error')).toBe(false);
    expect(isError(null)).toBe(false);
  });
});
