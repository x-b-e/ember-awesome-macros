import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default function(key) {
  return computed(key, function() {
    let val = get(this, key);
    if (!val) {
      return val;
    }

    return val.toUpperCase();
  });
}
