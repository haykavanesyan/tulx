import { describe, it, expect } from 'vitest';
import { escape } from './escape';

describe('escape', () => {
  it('should escape HTML entities', () => {
    expect(escape('fred, barney, & pebbles')).toBe(
      'fred, barney, &amp; pebbles'
    );
    expect(escape('<div>')).toBe('&lt;div&gt;');
  });
});
