import { describe, it, expect } from 'vitest';

import { runInContext } from './run-in-context';

describe('runInContext', () => {
  it('should return globalThis when no context', () => {
    expect(runInContext()).toBe(globalThis);
  });

  it('should return context when provided', () => {
    const context = {};
    expect(runInContext(context)).toBe(context);
  });
});
