import { describe, it, expect } from 'vitest';
import { bindKey } from './bind-key';

describe('bindKey', () => {
  it('should bind method with partials', () => {
    const object = {
      user: 'fred',
      greet: function (
        this: typeof object,
        greeting: string,
        punctuation: string
      ) {
        return greeting + ' ' + this.user + punctuation;
      },
    };
    const bound = bindKey(object, 'greet', 'hi');
    expect(bound('!')).toBe('hi fred!');
  });

  it('should throw error for non-function method', () => {
    const object = { value: 42 };
    const bound = bindKey(object, 'value');
    expect(() => bound()).toThrow('Expected a function at key "value"');
  });

  it('should prepend partials to arguments', () => {
    const object = {
      add: function (a: number, b: number, c: number) {
        return a + b + c;
      },
    };
    const bound = bindKey(object, 'add', 1, 2);
    expect(bound(3)).toBe(6);
  });
});
