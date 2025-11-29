import { describe, it, expect } from 'vitest';

import { isElement } from './is-LElement';

describe('isElement', () => {
  it('should return true for DOM elements', () => {
    const element = { nodeType: 1, nodeName: 'DIV' };
    expect(isElement(element)).toBe(true);
  });

  it('should return false for non-elements', () => {
    expect(isElement('<body>')).toBe(false);
    expect(isElement({})).toBe(false);
    expect(isElement(null)).toBe(false);
  });
});
