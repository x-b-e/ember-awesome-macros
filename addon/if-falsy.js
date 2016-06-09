import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default function(key, fallback) {
  return computed(key, fallback, function() {
    let val = get(this, key);
    return val ? val : get(this, fallback);
  });
}
