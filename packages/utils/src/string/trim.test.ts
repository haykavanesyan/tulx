import { describe, it, expect } from 'vitest';
import { trim } from './trim';

describe('trim', () => {
  it('should trim whitespace', () => {
    expect(trim('  abc  ')).toBe('abc');
  });

  it('should trim specified characters', () => {
    expect(trim('-_-abc-_-', '_-')).toBe('abc');
  });
});
