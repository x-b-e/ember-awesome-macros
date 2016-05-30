import Ember from 'ember';

const {
  get,
  computed,
  RSVP
} = Ember;

export default function(...keys) {
  return computed(...keys, function() {
    let promiseHash = {};
    keys.forEach(key => {
      promiseHash[key] = get(this, key);
    });
    return RSVP.hash(promiseHash);
  });
}
