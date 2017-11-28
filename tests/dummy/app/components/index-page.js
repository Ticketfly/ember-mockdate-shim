import Component from "@ember/component";
import layout from '../templates/components/index-page';

export default Component.extend({
  layout,
  elementId: 'index-page',

  init() {
    this._super(...arguments);
    this.set('dateYear', new Date().getFullYear());
  },
});
