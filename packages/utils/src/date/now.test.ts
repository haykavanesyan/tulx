import { describe, it, expect } from 'vitest';
import { now } from './now';

describe('now', () => {
  it('should return current timestamp', () => {
    const timestamp = now();
    expect(typeof timestamp).toBe('number');
    expect(timestamp).toBeGreaterThan(0);
  });

  it('should return timestamp close to Date.now()', () => {
    const timestamp = now();
    const dateNow = Date.now();
    // Should be within 10ms of each other
    expect(Math.abs(timestamp - dateNow)).toBeLessThan(10);
  });

  it('should return increasing timestamps', () => {
    const timestamp1 = now();
    const timestamp2 = now();
    expect(timestamp2).toBeGreaterThanOrEqual(timestamp1);
  });

  it('should return number type', () => {
    expect(typeof now()).toBe('number');
  });
});
