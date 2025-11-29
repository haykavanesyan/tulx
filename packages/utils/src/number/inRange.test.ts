import { describe, it, expect } from 'vitest';
import { inRange } from './inRange';

describe('inRange', () => {
  it('should return true when number is in range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  it('should return false when number equals end', () => {
    expect(inRange(2, 2)).toBe(false);
    expect(inRange(4, 2, 4)).toBe(false);
  });

  it('should return false when number equals start', () => {
    expect(inRange(2, 2, 4)).toBe(true);
  });

  it('should handle single argument (0 to start)', () => {
    expect(inRange(4, 8)).toBe(true);
    expect(inRange(4, 2)).toBe(false);
  });

  it('should handle floating point numbers', () => {
    expect(inRange(1.2, 2)).toBe(true);
    expect(inRange(5.2, 4)).toBe(false);
  });

  it('should swap start and end if start > end', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(1, 4, 2)).toBe(false);
    expect(inRange(5, 4, 2)).toBe(false);
  });

  it('should return false for number below range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
  });

  it('should return false for number above range', () => {
    expect(inRange(5, 2, 4)).toBe(false);
  });

  it('should handle negative numbers', () => {
    expect(inRange(-2, -4, -1)).toBe(true);
    expect(inRange(-5, -4, -1)).toBe(false);
  });

  it('should handle zero', () => {
    expect(inRange(0, 0, 1)).toBe(true);
    expect(inRange(0, 1)).toBe(true);
    expect(inRange(0, -1, 1)).toBe(true);
  });
});
