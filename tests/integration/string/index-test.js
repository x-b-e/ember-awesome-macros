import { string, raw } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import compute from '../../helpers/compute';

module('Integration | Macro | string | index');

test('lookup: calls string function', function(assert) {
  compute({
    assert,
    computed: string.includes('string', 'searchString', 'position'),
    properties: {
      string: '121',
      searchString: '1',
      position: 1
    },
    strictEqual: true
  });
});

test('composing: calls string function', function(assert) {
  compute({
    assert,
    computed: string.includes(raw('121'), raw('1'), 1),
    strictEqual: true
  });
});
