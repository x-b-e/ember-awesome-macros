import Ember from 'ember';
import { flattenKeys, getValue } from './utils';

const {
  A: newArray,
  computed
} = Ember;

export default function(...keys) {
  return computed(...flattenKeys(keys), function() {
    return newArray(keys.map(key => getValue(this, key)));
  });
}
