import { describe, it, expect } from 'vitest';

import { bindAll } from './bind-all';

describe('bindAll', () => {
  it('should bind methods to object', () => {
    const view = {
      label: 'docs',
      onClick(this: typeof view) {
        return `clicked ${this.label}`;
      },
    };
    bindAll(view, ['onClick']);
    const onClick = view.onClick;
    expect(onClick()).toBe('clicked docs');
  });
});
