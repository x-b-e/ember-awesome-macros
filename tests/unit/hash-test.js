import Ember from 'ember';
import { hash } from 'ember-awesome-macros';
import { module, test } from 'qunit';

const {
  get, setProperties
} = Ember;

const Obj = Ember.Object.extend({
  test: hash({
    source1: 'source',
    source2: hash({
      source: 'source'
    })
  })
});

let obj;

module('Unit | Macro | hash', {
  beforeEach() {
    obj = Obj.create();
  }
});

test('it works', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source: 'test value'
  });

  assert.deepEqual(get(obj, 'test'), {
    source1: 'test value',
    source2: {
      source: 'test value'
    }
  });
});
