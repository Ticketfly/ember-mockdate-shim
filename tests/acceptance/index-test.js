import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

moduleForAcceptance('Acceptance | index');

test('can visit index route with async model and freeze date in acceptance test', function(assert) {
  assert.expect(3);

  freezeDateAt('1/1/2000');

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    const frozenDateYear = document.getElementById('index-page').textContent.trim();

    assert.equal(frozenDateYear, 2000, 'Year is the same as frozen date');

    unfreezeDate();

    assert.ok(true, 'make it to the end of the acceptance test after freezing/unfreezing dates');
  });
});
