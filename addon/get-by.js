import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default function(obj, key) {
  return computed(obj, key, function() {
    let newKey = get(this, key);
    let newObj = get(this, `${obj}.${newKey}`);
    return newObj;
  });
}
