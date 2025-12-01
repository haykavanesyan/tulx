/**
 * ESLint configuration exports
 */
import base from './base';
import baseTypeChecked from './base-type-checked';
import next from './next';
import type { Linter } from 'eslint';
export { base, baseTypeChecked, next };
declare const config: {
    base: Linter.Config;
    'base-type-checked': Linter.Config;
    next: Linter.Config;
};
export default config;
//# sourceMappingURL=index.d.ts.map