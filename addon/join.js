import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default function(arrayKey, separator) {
  return computed(arrayKey, function() {
    let array = get(this, arrayKey);
    let string = array.join(separator);
    return string;
  });
}
