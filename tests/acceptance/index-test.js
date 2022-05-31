import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('It mocks the date', async function (assert) {
    freezeDateAt('1970-08-29');

    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('[data-test-dateyear]').hasText('1970');

    unfreezeDate();

    assert.ok(
      true,
      'make it to the end of the acceptance test after freezing/unfreezing dates'
    );
  });
});
