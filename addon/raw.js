import Ember from 'ember';

const {
  computed
} = Ember;

export default function(key) {
  return computed(() => key);
}
