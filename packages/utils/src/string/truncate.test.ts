import { describe, it, expect } from 'vitest';

import { truncate } from './truncate';

describe('truncate', () => {
  it('should truncate string', () => {
    expect(truncate('hi-diddly-ho there, neighborino')).toBe(
      'hi-diddly-ho there, neighbo...'
    );
  });

  it('should truncate with options', () => {
    // separator finds last match before truncation point
    expect(
      truncate('hi-diddly-ho there, neighborino', {
        length: 24,
        separator: ' ',
      })
    ).toBe('hi-diddly-ho...');
    expect(
      truncate('hi-diddly-ho there, neighborino', { omission: ' [...]' })
    ).toBe('hi-diddly-ho there, neig [...]');
  });
});
