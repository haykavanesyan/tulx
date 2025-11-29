import { describe, it, expect } from 'vitest';
import { lt } from './lt';

describe('lt', () => {
  it('should return true when value is less', () => {
    expect(lt(1, 3)).toBe(true);
    expect(lt('a', 'd')).toBe(true);
  });

  it('should return false when value is equal', () => {
    expect(lt(3, 3)).toBe(false);
    expect(lt('a', 'a')).toBe(false);
  });

  it('should return false when value is greater', () => {
    expect(lt(3, 1)).toBe(false);
    expect(lt('d', 'a')).toBe(false);
  });
});
