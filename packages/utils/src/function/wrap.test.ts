import { describe, it, expect } from 'vitest';

import { wrap } from './wrap';

describe('wrap', () => {
  it('should wrap value with wrapper function', () => {
    const escape = (text: string) => text.replace('&', '&amp;');
    const p = wrap(
      escape,
      (func: typeof escape, text: string) => `<p>${func(text)}</p>`
    );
    expect(p('fred, barney, & pebbles')).toBe(
      '<p>fred, barney, &amp; pebbles</p>'
    );
  });

  it('should pass wrapper arguments', () => {
    const value = 42;
    const wrapper = (val: number, multiplier: number) => val * multiplier;
    const wrapped = wrap(value, wrapper);
    expect(wrapped(2)).toBe(84);
  });

  it('should handle multiple arguments', () => {
    const value = 'hello';
    const wrapper = (val: string, a: string, b: string) => val + a + b;
    const wrapped = wrap(value, wrapper);
    expect(wrapped(' ', 'world')).toBe('hello world');
  });
});
