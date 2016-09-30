import Ember from 'ember';
import { flattenKeys, getValue } from './utils';

const {
  computed
} = Ember;

export default function(key) {
  return computed(...flattenKeys([key]), function() {
    return !getValue(this, key);
  });
}
