import Ember from 'ember';
import { flattenKeys, getValue } from './utils';

const {
  computed
} = Ember;

export default function(hash) {
  let hashKeys = Object.keys(hash);
  let hashValues = hashKeys.map(key => hash[key]);
  return computed(...flattenKeys(hashValues), function() {
    return hashKeys.reduce((newHash, key) => {
      newHash[key] = getValue(this, hash[key]);
      return newHash;
    }, {});
  });
}
