import Ember from 'ember';
import defaultTrue from 'ember-awesome-macros/default-true';
import { module, test } from 'qunit';

const {
  get, set
} = Ember;

const Obj = Ember.Object.extend({
  source: undefined,
  test: defaultTrue('source')
});

let obj;

module('Unit | Macro | default true', {
  beforeEach() {
    obj = Obj.create();
  }
});

test('defaults true', function(assert) {
  assert.expect(1);

  assert.strictEqual(get(obj, 'test'), true);
});

test('false passes through', function(assert) {
  assert.expect(1);

  set(obj, 'source', false);

  assert.strictEqual(get(obj, 'test'), false);
});

test('true passes through', function(assert) {
  assert.expect(1);

  set(obj, 'source', true);

  assert.strictEqual(get(obj, 'test'), true);
});
