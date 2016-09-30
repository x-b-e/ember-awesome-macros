import { getValue } from 'ember-awesome-macros/utils';
import { module, test } from 'qunit';

module('Unit | Utility | get value');

test('it evaluates regular properties', function(assert) {
  let context = {
    testKey: 'test value'
  };

  let value = getValue(context, 'testKey');

  assert.strictEqual(value, 'test value');
});

test('it evaluates computed properties', function(assert) {
  let context = {};

  let key = {
    _getter() {
      assert.strictEqual(this, context);

      return 'test value';
    }
  };

  let value = getValue(context, key);

  assert.strictEqual(value, 'test value');
});
