import Ember from 'ember';
import { flattenKeys, getValue } from './utils';

const {
  computed
} = Ember;

export default function(...keys) {
  return computed(...flattenKeys(keys), function() {
    return keys.reduce((val, key) => {
      return val || getValue(this, key);
    }, false);
  });
}
