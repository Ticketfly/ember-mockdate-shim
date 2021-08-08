import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

module('Integration | Component | index-page', function (hooks) {
  setupRenderingTest(hooks);

  test('freezes new Date', async function (assert) {
    freezeDateAt('1999-12-26');

    await render(hbs`<IndexPage />`);

    assert.dom('[data-test-dateyear]').hasText('1999');

    unfreezeDate();
  });
});

