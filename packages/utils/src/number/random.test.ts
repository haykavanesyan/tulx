import { describe, it, expect } from 'vitest';
import { random } from './random';

describe('random', () => {
  it('should return number between 0 and 5', () => {
    const result = random(0, 5);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
    expect(Number.isInteger(result)).toBe(true);
  });

  it('should return number between 0 and given number when only one argument', () => {
    const result = random(5);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
    expect(Number.isInteger(result)).toBe(true);
  });

  it('should return floating point when floating is true', () => {
    const result = random(5, true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(5);
    expect(Number.isInteger(result)).toBe(false);
  });

  it('should return floating point when bounds are floats', () => {
    const result = random(1.2, 5.2);
    expect(result).toBeGreaterThanOrEqual(1.2);
    expect(result).toBeLessThanOrEqual(5.2);
    expect(Number.isInteger(result)).toBe(false);
  });

  it('should return number between 0 and 1 when no arguments', () => {
    const result = random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });

  it('should handle negative bounds', () => {
    const result = random(-5, -1);
    expect(result).toBeGreaterThanOrEqual(-5);
    expect(result).toBeLessThanOrEqual(-1);
  });

  it('should return different values on multiple calls', () => {
    const results = Array.from({ length: 10 }, () => random(0, 100));
    const uniqueResults = new Set(results);
    // With 10 calls in range 0-100, we should get at least some different values
    expect(uniqueResults.size).toBeGreaterThan(1);
  });

  it('should handle equal bounds', () => {
    const result = random(5, 5);
    expect(result).toBe(5);
  });

  it('should handle zero bound', () => {
    const result = random(0, 0);
    expect(result).toBe(0);
  });
});
