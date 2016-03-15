import Ember from 'ember';

const {
  ArrayProxy,
  PromiseProxyMixin,
  get,
  computed
} = Ember;

const PromiseArray = ArrayProxy.extend(PromiseProxyMixin);

export default function() {
  let args = Array.apply(null, arguments);
  let keys = args.slice(0, -1);
  let getPromise = args[args.length - 1];

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
