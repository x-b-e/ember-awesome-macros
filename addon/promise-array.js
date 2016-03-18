import Ember from 'ember';

const {
  ArrayProxy,
  PromiseProxyMixin,
  get,
  computed
} = Ember;

const PromiseArray = ArrayProxy.extend(PromiseProxyMixin);

export default function(...args) {
  let getPromise = args.pop();
  let keys = args;

  if (typeof getPromise === 'string') {
    let key = getPromise;
    return computed(key, function() {
      return PromiseArray.create({
        promise: get(this, key)
      });
    });
  }

  return computed(...keys, function() {
    return PromiseArray.create({
      promise: getPromise.call(this)
    });
  });
}
