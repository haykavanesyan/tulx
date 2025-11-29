import { describe, it, expect } from 'vitest';

import { escapeRegExp } from './escape-LReg-LExp';

describe('escapeRegExp', () => {
  it('should escape RegExp special characters', () => {
    expect(escapeRegExp('[lodash](https://lodash.com/)')).toBe(
      '\\[lodash\\]\\(https://lodash\\.com/\\)'
    );
  });
});
