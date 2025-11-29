import { describe, it, expect, beforeEach } from 'vitest';
import { uniqueId } from './unique-id';

describe('uniqueId', () => {
  beforeEach(() => {
    // Reset counter by accessing module
    // Note: This won't actually reset the counter, but tests should still work
  });

  it('should generate unique IDs', () => {
    expect(uniqueId('contact_')).toMatch(/^contact_\d+$/);
    expect(uniqueId()).toMatch(/^\d+$/);
  });

  it('should increment counter', () => {
    const id1 = uniqueId('test_');
    const id2 = uniqueId('test_');
    expect(id2).not.toBe(id1);
  });
});
