import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

moduleForComponent('index-page', 'Integration | Component | index page', {
  integration: true
});

test('freeze `new Date()` in component integration test', function(assert) {
  assert.expect(2);

  freezeDateAt('1/1/2000');

  this.render(hbs`{{index-page}}`);

  const frozenDateYear = this.$().text().trim();

  assert.equal(frozenDateYear, 2000, 'Year is the same as frozen date');

  unfreezeDate();

  assert.ok(true, 'Made it to the end of the integration test')
});
