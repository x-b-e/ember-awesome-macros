import Ember from 'ember';

const {
  get,
  computed,
  RSVP
} = Ember;

export default function(...keys) {
  return computed(...keys, function() {
    let promiseArray = keys.map(key => get(this, key));
    return RSVP.all(promiseArray);
  });
}
