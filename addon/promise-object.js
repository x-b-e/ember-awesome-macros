import Ember from 'ember';

const {
  ObjectProxy,
  PromiseProxyMixin,
  get,
  computed
} = Ember;

const PromiseObject = ObjectProxy.extend(PromiseProxyMixin);

export default function(...args) {
  let getPromise = args.pop();
  let keys = args;

  if (typeof getPromise === 'string') {
    let key = getPromise;
    return computed(key, function() {
      return PromiseObject.create({
        promise: get(this, key)
      });
    });
  }

  return computed(...keys, function() {
    return PromiseObject.create({
      promise: getPromise.apply(this, arguments)
    });
  });
}
