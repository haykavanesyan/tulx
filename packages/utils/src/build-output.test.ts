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
const utilifyCJS = require(resolve(__dirname, '../dist/index.js'));

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
    testFunction('chunk', utilifyCJS.chunk, (chunk) => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    testFunction('compact', utilifyCJS.compact, (compact) => {
      expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });

    testFunction('first', utilifyCJS.first, (first) => {
      expect(first([1, 2, 3])).toBe(1);
      expect(first([])).toBeUndefined();
    });

    testFunction('flatten', utilifyCJS.flatten, (flatten) => {
      expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
    });

    testFunction('uniq', utilifyCJS.uniq, (uniq) => {
      expect(uniq([2, 1, 2])).toEqual([2, 1]);
    });

    testFunction('concat', utilifyCJS.concat, (concat) => {
      expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
    });

    testFunction('difference', utilifyCJS.difference, (difference) => {
      expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
  });

  describe('Collection', () => {
    testFunction('map', utilifyCJS.map, (map) => {
      expect(map([1, 2, 3], (n: number) => n * 2)).toEqual([2, 4, 6]);
    });

    testFunction('filter', utilifyCJS.filter, (filter) => {
      expect(filter([1, 2, 3, 4], (n: number) => n % 2 === 0)).toEqual([2, 4]);
    });

    testFunction('reduce', utilifyCJS.reduce, (reduce) => {
      expect(reduce([1, 2, 3], (sum: number, n: number) => sum + n, 0)).toBe(6);
    });

    testFunction('find', utilifyCJS.find, (find) => {
      expect(find([1, 2, 3, 4], (n: number) => n > 2)).toBe(3);
    });

    testFunction('groupBy', utilifyCJS.groupBy, (groupBy) => {
      expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
        4: [4.2],
        6: [6.1, 6.3],
      });
    });

    testFunction('some', utilifyCJS.some, (some) => {
      expect(some([1, 2, 3], (n: number) => n > 2)).toBe(true);
      expect(some([1, 2, 3], (n: number) => n > 5)).toBe(false);
    });

    testFunction('every', utilifyCJS.every, (every) => {
      expect(every([2, 4, 6], (n: number) => n % 2 === 0)).toBe(true);
      expect(every([2, 4, 5], (n: number) => n % 2 === 0)).toBe(false);
    });
  });

  describe('String', () => {
    testFunction('camelCase', utilifyCJS.camelCase, (camelCase) => {
      expect(camelCase('foo bar')).toBe('fooBar');
      expect(camelCase('--foo-bar--')).toBe('fooBar');
    });

    testFunction('capitalize', utilifyCJS.capitalize, (capitalize) => {
      expect(capitalize('FRED')).toBe('Fred');
      expect(capitalize('fred')).toBe('Fred');
    });

    testFunction('trim', utilifyCJS.trim, (trim) => {
      expect(trim('  abc  ')).toBe('abc');
      expect(trim('---abc---', '-')).toBe('abc');
    });

    testFunction('startsWith', utilifyCJS.startsWith, (startsWith) => {
      expect(startsWith('abc', 'a')).toBe(true);
      expect(startsWith('abc', 'b')).toBe(false);
    });

    testFunction('endsWith', utilifyCJS.endsWith, (endsWith) => {
      expect(endsWith('abc', 'c')).toBe(true);
      expect(endsWith('abc', 'b')).toBe(false);
    });

    testFunction('kebabCase', utilifyCJS.kebabCase, (kebabCase) => {
      expect(kebabCase('Foo Bar')).toBe('foo-bar');
    });

    testFunction('snakeCase', utilifyCJS.snakeCase, (snakeCase) => {
      expect(snakeCase('Foo Bar')).toBe('foo_bar');
    });
  });

  describe('Object', () => {
    testFunction('assign', utilifyCJS.assign, (assign) => {
      expect(assign({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });

    testFunction('keys', utilifyCJS.keys, (keys) => {
      expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });

    testFunction('values', utilifyCJS.values, (values) => {
      expect(values({ a: 1, b: 2 })).toEqual([1, 2]);
    });

    testFunction('pick', utilifyCJS.pick, (pick) => {
      expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    testFunction('omit', utilifyCJS.omit, (omit) => {
      expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 });
    });

    testFunction('get', utilifyCJS.get, (get) => {
      const obj = { a: { b: { c: 3 } } };
      expect(get(obj, 'a.b.c')).toBe(3);
      expect(get(obj, 'a.b.d', 'default')).toBe('default');
    });

    testFunction('has', utilifyCJS.has, (has) => {
      expect(has({ a: { b: 2 } }, 'a.b')).toBe(true);
      expect(has({ a: { b: 2 } }, 'a.c')).toBe(false);
    });
  });

  describe('Number', () => {
    testFunction('clamp', utilifyCJS.clamp, (clamp) => {
      expect(clamp(-10, -5, 5)).toBe(-5);
      expect(clamp(10, -5, 5)).toBe(5);
      expect(clamp(3, -5, 5)).toBe(3);
    });

    testFunction('inRange', utilifyCJS.inRange, (inRange) => {
      expect(inRange(3, 2, 4)).toBe(true);
      expect(inRange(4, 8)).toBe(true);
      expect(inRange(4, 2)).toBe(false);
    });
  });

  describe('Math', () => {
    testFunction('add', utilifyCJS.add, (add) => {
      expect(add(6, 4)).toBe(10);
    });

    testFunction('subtract', utilifyCJS.subtract, (subtract) => {
      expect(subtract(6, 4)).toBe(2);
    });

    testFunction('multiply', utilifyCJS.multiply, (multiply) => {
      expect(multiply(6, 4)).toBe(24);
    });

    testFunction('divide', utilifyCJS.divide, (divide) => {
      expect(divide(6, 4)).toBe(1.5);
    });

    testFunction('max', utilifyCJS.max, (max) => {
      expect(max([4, 2, 8, 6])).toBe(8);
    });

    testFunction('min', utilifyCJS.min, (min) => {
      expect(min([4, 2, 8, 6])).toBe(2);
    });

    testFunction('sum', utilifyCJS.sum, (sum) => {
      expect(sum([4, 2, 8, 6])).toBe(20);
    });

    testFunction('mean', utilifyCJS.mean, (mean) => {
      expect(mean([4, 2, 8, 6])).toBe(5);
    });
  });

  describe('Function', () => {
    testFunction('once', utilifyCJS.once, (once) => {
      let count = 0;
      const increment = once(() => ++count);
      expect(increment()).toBe(1);
      expect(increment()).toBe(1);
      expect(count).toBe(1);
    });

    testFunction('debounce', utilifyCJS.debounce, (debounce) => {
      let count = 0;
      const fn = debounce(() => count++, 100);
      expect(typeof fn).toBe('function');
      expect(typeof fn.cancel).toBe('function');
      fn();
      fn.cancel();
    });

    testFunction('throttle', utilifyCJS.throttle, (throttle) => {
      let count = 0;
      const fn = throttle(() => count++, 100);
      expect(typeof fn).toBe('function');
      expect(typeof fn.cancel).toBe('function');
      fn();
      fn.cancel();
    });

    testFunction('curry', utilifyCJS.curry, (curry) => {
      const add = (a: number, b: number) => a + b;
      const curriedAdd = curry(add);
      expect(curriedAdd(1)(2)).toBe(3);
      expect(curriedAdd(1, 2)).toBe(3);
    });

    testFunction('memoize', utilifyCJS.memoize, (memoize) => {
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
    testFunction('isArray', utilifyCJS.isArray, (isArray) => {
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray('abc')).toBe(false);
    });

    testFunction('isString', utilifyCJS.isString, (isString) => {
      expect(isString('abc')).toBe(true);
      expect(isString(123)).toBe(false);
    });

    testFunction('isNumber', utilifyCJS.isNumber, (isNumber) => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber('123')).toBe(false);
    });

    testFunction('isBoolean', utilifyCJS.isBoolean, (isBoolean) => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(0)).toBe(false);
    });

    testFunction('isEqual', utilifyCJS.isEqual, (isEqual) => {
      expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
      expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    });

    testFunction('clone', utilifyCJS.clone, (clone) => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = clone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
    });

    testFunction('isEmpty', utilifyCJS.isEmpty, (isEmpty) => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
    });
  });

  describe('Util', () => {
    testFunction('identity', utilifyCJS.identity, (identity) => {
      expect(identity(3)).toBe(3);
      expect(identity('test')).toBe('test');
    });

    testFunction('range', utilifyCJS.range, (range) => {
      expect(range(4)).toEqual([0, 1, 2, 3]);
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
      expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
    });

    testFunction('noop', utilifyCJS.noop, (noop) => {
      expect(noop()).toBeUndefined();
    });

    testFunction('constant', utilifyCJS.constant, (constant) => {
      const getValue = constant(42);
      expect(getValue()).toBe(42);
      expect(getValue()).toBe(42);
    });
  });

  describe('Seq', () => {
    testFunction('chain', utilifyCJS.chain, (chain) => {
      const value = [1, 2, 3];
      const wrapper = chain(value);
      expect(wrapper.value()).toEqual([1, 2, 3]);
      expect(wrapper.value()).toBe(value);
    });

    testFunction('tap', utilifyCJS.tap, (tap) => {
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
      expect(utilifyCJS[fnName]).toBeDefined();
      expect(typeof utilifyCJS[fnName]).toBe('function');
    }
  });

  it('should have correct function signatures', () => {
    // Test that functions accept correct number of arguments
    expect(() => utilifyCJS.chunk([1, 2, 3], 2)).not.toThrow();
    expect(() => utilifyCJS.add(1, 2)).not.toThrow();
    expect(() => utilifyCJS.map([1, 2], (n: number) => n * 2)).not.toThrow();
  });
});

describe('Build Output - ESM', () => {
  it('should be able to dynamically import ESM build', async () => {
    const esmPath = resolve(__dirname, '../dist/index.mjs');
    const utilifyESM = await import(`file://${esmPath}`);

    expect(utilifyESM).toBeDefined();
    expect(utilifyESM.chunk).toBeDefined();
    expect(typeof utilifyESM.chunk).toBe('function');

    // Test that ESM functions work
    expect(utilifyESM.chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(utilifyESM.add(6, 4)).toBe(10);
    expect(utilifyESM.isArray([1, 2, 3])).toBe(true);
  });
});
