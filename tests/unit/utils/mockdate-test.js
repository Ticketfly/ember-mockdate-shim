import { module, test } from 'qunit';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

module('Unit | Utility | mockdate', {
  afterEach() {
    unfreezeDate();
  },
});

test('freezes `new Date()`', function (assert) {
  freezeDateAt(new Date('1/1/2000'));

  const result = new Date();

  assert.equal(result.getFullYear(), 2000, 'Year is the same as frozen date');
});

test('unfreezes date', function (assert) {
  freezeDateAt(new Date('2/2/1992'));

  const frozenResult = new Date();

  unfreezeDate();

  const unfrozenResult = new Date();

  assert.notEqual(
    frozenResult.getFullYear(),
    unfrozenResult.getFullYear(),
    'Date is different after unfreezing'
  );
});
