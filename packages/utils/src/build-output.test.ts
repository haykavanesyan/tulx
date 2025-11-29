/**
 * Tests for build output to ensure all functions work correctly when bundled.
 * This test imports from the built dist files (both CJS and ESM) to verify
 * that the bundling process doesn't break functionality.
 */

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { describe, it, expect } from 'vitest';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test CJS build
// We intentionally use require() to test the CommonJS build output
// eslint-disable-next-line @typescript-eslint/no-require-imports, import/no-commonjs, @typescript-eslint/no-var-requires
const utilkitCJS = require(resolve(__dirname, '../dist/index.js'));

/**
 * Test a function from the bundle to ensure it works correctly
 */
function testFunction<T extends (...args: unknown[]) => unknown>(
  fnName: string,
  fn: T,
  testFn: (fn: T) => void
): void {
  it(`should export and work: ${fnName}`, () => {
    expect(fn).toBeDefined();
    expect(typeof fn).toBe('function');
    testFn(fn);
  });
}

describe('Build Output - CJS', () => {
  describe('Arrays', () => {
    testFunction('chunk', utilkitCJS.chunk, (chunk) => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    testFunction('compact', utilkitCJS.compact, (compact) => {
      expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });

    testFunction('first', utilkitCJS.first, (first) => {
      expect(first([1, 2, 3])).toBe(1);
      expect(first([])).toBeUndefined();
    });

    testFunction('flatten', utilkitCJS.flatten, (flatten) => {
      expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
    });

    testFunction('uniq', utilkitCJS.uniq, (uniq) => {
      expect(uniq([2, 1, 2])).toEqual([2, 1]);
    });

    testFunction('concat', utilkitCJS.concat, (concat) => {
      expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
    });

    testFunction('difference', utilkitCJS.difference, (difference) => {
      expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
  });

  describe('Collection', () => {
    testFunction('map', utilkitCJS.map, (map) => {
      expect(map([1, 2, 3], (n: number) => n * 2)).toEqual([2, 4, 6]);
    });

    testFunction('filter', utilkitCJS.filter, (filter) => {
      expect(filter([1, 2, 3, 4], (n: number) => n % 2 === 0)).toEqual([2, 4]);
    });

    testFunction('reduce', utilkitCJS.reduce, (reduce) => {
      expect(reduce([1, 2, 3], (sum: number, n: number) => sum + n, 0)).toBe(6);
    });

    testFunction('find', utilkitCJS.find, (find) => {
      expect(find([1, 2, 3, 4], (n: number) => n > 2)).toBe(3);
    });

    testFunction('groupBy', utilkitCJS.groupBy, (groupBy) => {
      expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
        4: [4.2],
        6: [6.1, 6.3],
      });
    });

    testFunction('some', utilkitCJS.some, (some) => {
      expect(some([1, 2, 3], (n: number) => n > 2)).toBe(true);
      expect(some([1, 2, 3], (n: number) => n > 5)).toBe(false);
    });

    testFunction('every', utilkitCJS.every, (every) => {
      expect(every([2, 4, 6], (n: number) => n % 2 === 0)).toBe(true);
      expect(every([2, 4, 5], (n: number) => n % 2 === 0)).toBe(false);
    });
  });

  describe('String', () => {
    testFunction('camelCase', utilkitCJS.camelCase, (camelCase) => {
      expect(camelCase('foo bar')).toBe('fooBar');
      expect(camelCase('--foo-bar--')).toBe('fooBar');
    });

    testFunction('capitalize', utilkitCJS.capitalize, (capitalize) => {
      expect(capitalize('FRED')).toBe('Fred');
      expect(capitalize('fred')).toBe('Fred');
    });

    testFunction('trim', utilkitCJS.trim, (trim) => {
      expect(trim('  abc  ')).toBe('abc');
      expect(trim('---abc---', '-')).toBe('abc');
    });

    testFunction('startsWith', utilkitCJS.startsWith, (startsWith) => {
      expect(startsWith('abc', 'a')).toBe(true);
      expect(startsWith('abc', 'b')).toBe(false);
    });

    testFunction('endsWith', utilkitCJS.endsWith, (endsWith) => {
      expect(endsWith('abc', 'c')).toBe(true);
      expect(endsWith('abc', 'b')).toBe(false);
    });

    testFunction('kebabCase', utilkitCJS.kebabCase, (kebabCase) => {
      expect(kebabCase('Foo Bar')).toBe('foo-bar');
    });

    testFunction('snakeCase', utilkitCJS.snakeCase, (snakeCase) => {
      expect(snakeCase('Foo Bar')).toBe('foo_bar');
    });
  });

  describe('Object', () => {
    testFunction('assign', utilkitCJS.assign, (assign) => {
      expect(assign({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });

    testFunction('keys', utilkitCJS.keys, (keys) => {
      expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });

    testFunction('values', utilkitCJS.values, (values) => {
      expect(values({ a: 1, b: 2 })).toEqual([1, 2]);
    });

    testFunction('pick', utilkitCJS.pick, (pick) => {
      expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    testFunction('omit', utilkitCJS.omit, (omit) => {
      expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 });
    });

    testFunction('get', utilkitCJS.get, (get) => {
      const obj = { a: { b: { c: 3 } } };
      expect(get(obj, 'a.b.c')).toBe(3);
      expect(get(obj, 'a.b.d', 'default')).toBe('default');
    });

    testFunction('has', utilkitCJS.has, (has) => {
      expect(has({ a: { b: 2 } }, 'a.b')).toBe(true);
      expect(has({ a: { b: 2 } }, 'a.c')).toBe(false);
    });
  });

  describe('Number', () => {
    testFunction('clamp', utilkitCJS.clamp, (clamp) => {
      expect(clamp(-10, -5, 5)).toBe(-5);
      expect(clamp(10, -5, 5)).toBe(5);
      expect(clamp(3, -5, 5)).toBe(3);
    });

    testFunction('inRange', utilkitCJS.inRange, (inRange) => {
      expect(inRange(3, 2, 4)).toBe(true);
      expect(inRange(4, 8)).toBe(true);
      expect(inRange(4, 2)).toBe(false);
    });
  });

  describe('Math', () => {
    testFunction('add', utilkitCJS.add, (add) => {
      expect(add(6, 4)).toBe(10);
    });

    testFunction('subtract', utilkitCJS.subtract, (subtract) => {
      expect(subtract(6, 4)).toBe(2);
    });

    testFunction('multiply', utilkitCJS.multiply, (multiply) => {
      expect(multiply(6, 4)).toBe(24);
    });

    testFunction('divide', utilkitCJS.divide, (divide) => {
      expect(divide(6, 4)).toBe(1.5);
    });

    testFunction('max', utilkitCJS.max, (max) => {
      expect(max([4, 2, 8, 6])).toBe(8);
    });

    testFunction('min', utilkitCJS.min, (min) => {
      expect(min([4, 2, 8, 6])).toBe(2);
    });

    testFunction('sum', utilkitCJS.sum, (sum) => {
      expect(sum([4, 2, 8, 6])).toBe(20);
    });

    testFunction('mean', utilkitCJS.mean, (mean) => {
      expect(mean([4, 2, 8, 6])).toBe(5);
    });
  });

  describe('Function', () => {
    testFunction('once', utilkitCJS.once, (once) => {
      let count = 0;
      const increment = once(() => ++count);
      expect(increment()).toBe(1);
      expect(increment()).toBe(1);
      expect(count).toBe(1);
    });

    testFunction('debounce', utilkitCJS.debounce, (debounce) => {
      let count = 0;
      const fn = debounce(() => count++, 100);
      expect(typeof fn).toBe('function');
      expect(typeof fn.cancel).toBe('function');
      fn();
      fn.cancel();
    });

    testFunction('throttle', utilkitCJS.throttle, (throttle) => {
      let count = 0;
      const fn = throttle(() => count++, 100);
      expect(typeof fn).toBe('function');
      expect(typeof fn.cancel).toBe('function');
      fn();
      fn.cancel();
    });

    testFunction('curry', utilkitCJS.curry, (curry) => {
      const add = (a: number, b: number) => a + b;
      const curriedAdd = curry(add);
      expect(curriedAdd(1)(2)).toBe(3);
      expect(curriedAdd(1, 2)).toBe(3);
    });

    testFunction('memoize', utilkitCJS.memoize, (memoize) => {
      let callCount = 0;
      const add = (a: number, b: number) => {
        callCount++;
        return a + b;
      };
      const memoizedAdd = memoize(add);
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(callCount).toBe(1);
    });
  });

  describe('Lang', () => {
    testFunction('isArray', utilkitCJS.isArray, (isArray) => {
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray('abc')).toBe(false);
    });

    testFunction('isString', utilkitCJS.isString, (isString) => {
      expect(isString('abc')).toBe(true);
      expect(isString(123)).toBe(false);
    });

    testFunction('isNumber', utilkitCJS.isNumber, (isNumber) => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber('123')).toBe(false);
    });

    testFunction('isBoolean', utilkitCJS.isBoolean, (isBoolean) => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(0)).toBe(false);
    });

    testFunction('isEqual', utilkitCJS.isEqual, (isEqual) => {
      expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
      expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    });

    testFunction('clone', utilkitCJS.clone, (clone) => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = clone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
    });

    testFunction('isEmpty', utilkitCJS.isEmpty, (isEmpty) => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
    });
  });

  describe('Util', () => {
    testFunction('identity', utilkitCJS.identity, (identity) => {
      expect(identity(3)).toBe(3);
      expect(identity('test')).toBe('test');
    });

    testFunction('range', utilkitCJS.range, (range) => {
      expect(range(4)).toEqual([0, 1, 2, 3]);
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
      expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
    });

    testFunction('noop', utilkitCJS.noop, (noop) => {
      expect(noop()).toBeUndefined();
    });

    testFunction('constant', utilkitCJS.constant, (constant) => {
      const getValue = constant(42);
      expect(getValue()).toBe(42);
      expect(getValue()).toBe(42);
    });
  });

  describe('Seq', () => {
    testFunction('chain', utilkitCJS.chain, (chain) => {
      const value = [1, 2, 3];
      const wrapper = chain(value);
      expect(wrapper.value()).toEqual([1, 2, 3]);
      expect(wrapper.value()).toBe(value);
    });

    testFunction('tap', utilkitCJS.tap, (tap) => {
      let sideEffect = 0;
      const result = tap([1, 2, 3], () => {
        sideEffect++;
      });
      expect(result).toEqual([1, 2, 3]);
      expect(sideEffect).toBe(1);
    });
  });
});

describe('Build Output - Exports Verification', () => {
  it('should export all expected functions from CJS build', () => {
    const expectedFunctions = [
      // Arrays
      'chunk',
      'compact',
      'first',
      'flatten',
      'uniq',
      'concat',
      'difference',
      // Collection
      'map',
      'filter',
      'reduce',
      'find',
      'groupBy',
      'some',
      'every',
      // String
      'camelCase',
      'capitalize',
      'trim',
      'startsWith',
      'endsWith',
      // Object
      'assign',
      'keys',
      'values',
      'pick',
      'omit',
      'get',
      'has',
      // Math
      'add',
      'subtract',
      'multiply',
      'divide',
      'max',
      'min',
      'sum',
      'mean',
      // Function
      'once',
      'debounce',
      'throttle',
      'curry',
      'memoize',
      // Lang
      'isArray',
      'isString',
      'isNumber',
      'isBoolean',
      'isEqual',
      'clone',
      'isEmpty',
      // Util
      'identity',
      'range',
      'noop',
      'constant',
      // Seq
      'chain',
      'tap',
    ];

    for (const fnName of expectedFunctions) {
      expect(utilkitCJS[fnName]).toBeDefined();
      expect(typeof utilkitCJS[fnName]).toBe('function');
    }
  });

  it('should have correct function signatures', () => {
    // Test that functions accept correct number of arguments
    expect(() => utilkitCJS.chunk([1, 2, 3], 2)).not.toThrow();
    expect(() => utilkitCJS.add(1, 2)).not.toThrow();
    expect(() => utilkitCJS.map([1, 2], (n: number) => n * 2)).not.toThrow();
  });
});

describe('Build Output - ESM', () => {
  it('should be able to dynamically import ESM build', async () => {
    const esmPath = resolve(__dirname, '../dist/index.mjs');
    const utilkitESM = await import(`file://${esmPath}`);

    expect(utilkitESM).toBeDefined();
    expect(utilkitESM.chunk).toBeDefined();
    expect(typeof utilkitESM.chunk).toBe('function');

    // Test that ESM functions work
    expect(utilkitESM.chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(utilkitESM.add(6, 4)).toBe(10);
    expect(utilkitESM.isArray([1, 2, 3])).toBe(true);
  });
});
