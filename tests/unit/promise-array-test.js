import Ember from 'ember';
import promiseArray from 'ember-awesome-macros/promise-array';
import { module, test } from 'qunit';
import promise from 'ember-cpm/macros/promise';

const {
  get, set,
  A: newArray
} = Ember;

const Obj = Ember.Object.extend({
  wrapperSource: promise('funcSource'),
  wrapperTest: promiseArray('wrapperSource'),

  funcTest: promiseArray('funcSource', function() {
    return get(this, 'wrapperSource');
  })
});

let obj;

module('Unit | Macro | promise array', {
  beforeEach() {
    obj = Obj.create({
      funcSource: newArray([null])
    });
  }
});

test('wrapper returns an empty array', function(assert) {
  assert.expect(1);

  let result = get(obj, 'wrapperTest');

  assert.strictEqual(get(result, 'length'), 0);
});

test('wrapper resolves to a full array', function(assert) {
  assert.expect(1);

  let result = get(obj, 'wrapperTest');

  return result.then(() => {
    assert.strictEqual(get(result, 'length'), 1);
  });
});

test('wrapper resolved value is an array', function(assert) {
  assert.expect(1);

  let result = get(obj, 'wrapperTest');

  return result.then(result => {
    assert.strictEqual(get(result, 'length'), 1);
  });
});

test('wrapper watches changes', function(assert) {
  assert.expect(1);

  // first, get to compute property
  get(obj, 'wrapperTest');

  set(obj, 'funcSource', newArray([null, null]));

  let result = get(obj, 'wrapperTest');

  return result.then(result => {
    assert.strictEqual(get(result, 'length'), 2);
  });
});

test('wrapper responds to pushes', function(assert) {
  assert.expect(1);

  // first, get to compute property
  get(obj, 'wrapperTest');

  get(obj, 'funcSource').pushObject(null);

  let result = get(obj, 'wrapperTest');

  return result.then(result => {
    assert.strictEqual(get(result, 'length'), 2);
  });
});

test('func returns an empty array', function(assert) {
  assert.expect(1);

  let result = get(obj, 'funcTest');

  assert.strictEqual(get(result, 'length'), 0);
});

test('func resolves to a full array', function(assert) {
  assert.expect(1);

  let result = get(obj, 'funcTest');

  return result.then(() => {
    assert.strictEqual(get(result, 'length'), 1);
  });
});

test('func resolved value is an array', function(assert) {
  assert.expect(1);

  let result = get(obj, 'funcTest');

  return result.then(result => {
    assert.strictEqual(get(result, 'length'), 1);
  });
});

test('func watches changes', function(assert) {
  assert.expect(1);

  // first, get to compute property
  get(obj, 'funcTest');

  set(obj, 'funcSource', newArray([null, null]));

  let result = get(obj, 'funcTest');

  return result.then(result => {
    assert.strictEqual(get(result, 'length'), 2);
  });
});

test('func responds to pushes', function(assert) {
  assert.expect(1);

  // first, get to compute property
  get(obj, 'funcTest');

  get(obj, 'funcSource').pushObject(null);

  let result = get(obj, 'funcTest');

  return result.then(result => {
    assert.strictEqual(get(result, 'length'), 2);
  });
});
