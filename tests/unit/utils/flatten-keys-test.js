import { flattenKeys } from 'ember-awesome-macros/utils';
import { module, test } from 'qunit';

module('Unit | Utility | flatten keys');

test('it works', function(assert) {
  let key1 = 'test1';
  let key2 = {
    _dependentKeys: [
      'test2',
      {
        _dependentKeys: [
          'test3',
          'test4'
        ]
      }
    ]
  };

  let flattenedKeys = flattenKeys([key1, key2]);

  assert.deepEqual(flattenedKeys, [
    'test1',
    'test2',
    'test3',
    'test4'
  ]);
});
