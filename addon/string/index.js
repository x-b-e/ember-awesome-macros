export { default as lastIndexOf } from './last-index-of';
export { default as length } from './length';
export { default as substr } from './substr';
export { default as substring } from './substring';

import { normalizeString2 } from '../utils';

const funcStrings = [
  'includes',
  'indexOf'
];

export default funcStrings.reduce((obj, funcString) => {
  obj[funcString] = (...keys) => normalizeString2(keys, funcString);
  return obj;
}, {});
