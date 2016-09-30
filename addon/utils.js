import Ember from 'ember';

const {
  typeOf,
  get
} = Ember;

function isComputed(key) {
  return typeOf(key) === 'object';
}

function _flattenKeys(keys, flattenedKeys) {
  keys.forEach(key => {
    if (isComputed(key)) {
      _flattenKeys(key._dependentKeys, flattenedKeys);
    } else {
      flattenedKeys.push(key);
    }
  });
}

export function flattenKeys(keys) {
  let flattenedKeys = [];
  _flattenKeys(keys, flattenedKeys);
  return flattenedKeys;
}

export function getValue(context, key) {
  if (isComputed(key)) {
    return key._getter.call(context);
  } else {
    return get(context, key);
  }
}
