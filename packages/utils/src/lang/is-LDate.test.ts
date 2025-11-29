import { describe, it, expect } from 'vitest';
import { isDate } from './isDate';

describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('should return false for non-dates', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
    expect(isDate(1234567890)).toBe(false);
    expect(isDate(null)).toBe(false);
  });
});
