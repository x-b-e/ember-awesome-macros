import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default function(...keys) {
  let fallback = keys[keys.length - 1];

  return computed(...keys, function() {
    for (let i = 0; i < keys.length; i++) {
      let val = get(this, keys[i]);
      if (val) {
        return val;
      }
    }

    return get(this, fallback);
  });
}
