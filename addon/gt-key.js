import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default function(key1, key2) {
  return computed(key1, key2, function() {
    let val1 = get(this, key1);
    let val2 = get(this, key2);
    return val1 > val2;
  });
}
