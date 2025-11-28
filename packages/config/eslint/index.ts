/**
 * ESLint configuration exports
 */

import base from './base';
import baseTypeChecked from './base-type-checked';
import next from './next';

export { base, baseTypeChecked, next };

const config = {
  base,
  'base-type-checked': baseTypeChecked,
  next,
};

// ESLint requires CommonJS export for config files
// eslint-disable-next-line import/no-default-export
export default config;
module.exports = config;

