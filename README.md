# ember-awesome-macros

[![npm version](https://badge.fury.io/js/ember-awesome-macros.svg)](https://badge.fury.io/js/ember-awesome-macros)
[![Build Status](https://travis-ci.org/kellyselden/ember-awesome-macros.svg?branch=master)](https://travis-ci.org/kellyselden/ember-awesome-macros)
[![Dependency Status](https://david-dm.org/kellyselden/ember-awesome-macros.svg)](https://david-dm.org/kellyselden/ember-awesome-macros)
[![devDependency Status](https://david-dm.org/kellyselden/ember-awesome-macros/dev-status.svg)](https://david-dm.org/kellyselden/ember-awesome-macros#info=devDependencies)

#### Usage

```sh
ember install ember-awesome-macros
```

```js
import nameOfMacro from 'ember-awesome-macros/name-of-macro';
// or
import { nameOfMacro } from 'ember-awesome-macros';
```

#### Macro list
* [`defaultTrue`](#defaulttrue)
* [`equalKey`](#equalkey)
* [`getBy`](#getby)
* [`gtKey`](#gtkey)
* [`gteKey`](#gtekey)
* [`join`](#join)
* [`ltKey`](#ltkey)
* [`lteKey`](#ltekey)
* [`peekQueue`](#peekqueue)
* [`peekStack`](#peekstack)
* [`promiseAll`](#promiseall)
* [`promiseArray`](#promisearray)
* [`promiseHash`](#promisehash)
* [`promiseObject`](#promiseobject)
* [`toLower`](#tolower)
* [`toUpper`](#toupper)

#### Details

##### `defaultTrue`
true if source is undefined

```js
source1: undefined,
source2: false,
source3: 'my value',
value1: defaultTrue('source1') // true
value2: defaultTrue('source2') // false
value3: defaultTrue('source3') // "my value"
```

##### `equalKey`
like `Ember.computed.equal`, but uses dependent properties on both sides

```js
source1: 'my value',
source2: 'my other value',
source3: 'my value',
value1: equalKey('source1', 'source2') // false
value2: equalKey('source1', 'source3') // true
```

##### `getBy`
get a variable property name from an object

```js
key: 'modelProperty',
model: {
  modelProperty: 'my value'
},
value: getBy('model', 'key') // "my value"
```

##### `gtKey`
like `Ember.computed.gt`, but uses dependent properties on both sides

```js
source1: 1,
source2: 2,
source3: 1,
value1: gtKey('source1', 'source2') // false
value2: gtKey('source1', 'source3') // false
value3: gtKey('source2', 'source3') // true
```

##### `gteKey`
like `Ember.computed.gte`, but uses dependent properties on both sides

```js
source1: 1,
source2: 2,
source3: 1,
value1: gteKey('source1', 'source2') // false
value2: gteKey('source1', 'source3') // true
value3: gteKey('source2', 'source3') // true
```

##### `join`
join a computed array

```js
values: Ember.A(['1', '2']),
valuesString: join('values', ', ') // "1, 2"
```

##### `ltKey`
like `Ember.computed.lt`, but uses dependent properties on both sides

```js
source1: 1,
source2: 2,
source3: 1,
value1: ltKey('source1', 'source2') // true
value2: ltKey('source1', 'source3') // false
value3: ltKey('source2', 'source3') // false
```

##### `lteKey`
like `Ember.computed.lte`, but uses dependent properties on both sides

```js
source1: 1,
source2: 2,
source3: 1,
value1: lteKey('source1', 'source2') // true
value2: lteKey('source1', 'source3') // true
value3: lteKey('source2', 'source3') // false
```

##### `peekQueue`
get the first item of an array

```js
values: Ember.A(['1', '2']),
firstValue: peekQueue('values') // "1"
```

##### `peekStack`
get the last item of an array

```js
values: Ember.A(['1', '2']),
firstValue: peekStack('values') // "2"
```

##### `promiseAll`
combines promises using `RSVP.all`

```js
promise1: computed(function() {
  return RSVP.resolve('value1');
}),
promise2: computed(function() {
  return RSVP.resolve('value2');
}),
promise: promiseAll('promise1', 'promise2') // resolves to ['value1', 'value2']
```

##### `promiseArray`
wraps a promise in the equivalent of `DS.PromiseArray` (`ArrayProxy` and `PromiseProxyMixin`)

```js
products: promiseArray(function() {
  return this.store.findAll('product');
})
```

can also wrap an existing property

```js
productsPromise: computed(function() {
  return this.store.findAll('product');
}),
products: promiseArray('productsPromise')
```

##### `promiseHash`
combines promises using `RSVP.hash`

```js
promise1: computed(function() {
  return RSVP.resolve('value1');
}),
promise2: computed(function() {
  return RSVP.resolve('value2');
}),
promise: promiseHash('promise1', 'promise2') // resolves to { promise1: 'value1', promise2: 'value2' }
```

##### `promiseObject`
wraps a promise in the equivalent of `DS.PromiseObject` (`ObjectProxy` and `PromiseProxyMixin`)

```js
product: promiseObject(function() {
  return this.store.findRecord('product', 1);
})
```

can also wrap an existing property

```js
productPromise: computed(function() {
  return this.store.findRecord('product', 1);
}),
product: promiseObject('productPromise')
```

##### `toLower`
calls `toLowerCase` on your string

```js
originalValue: 'abcZXY',
newValue: toLower('originalValue') // "abcxyz"
```

##### `toUpper`
calls `toUpperCase` on your string

```js
originalValue: 'abcZXY',
newValue: toUpper('originalValue') // "ABCXYZ"
```
