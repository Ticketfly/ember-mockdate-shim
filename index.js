const funnel = require('broccoli-funnel');
const path = require('path');
const mergeTrees = require('broccoli-merge-trees');

/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-mockdate-shim',

  included() {
    const app = this._findHost();
    const vendorPath = this.treePaths.vendor;

    if (!this._isProduction()) {
      app.import(vendorPath + '/mockdate/mockdate.js');
    }
  },

  treeForVendor(vendorTree) {
    const trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    const pathName = path.dirname(require.resolve('mockdate'));

    trees.push(
      funnel(pathName, {
        destDir: 'mockdate',
        include: [new RegExp(/\.js$/)]
      })
    );

    return mergeTrees(trees);
  },

  _isProduction() {
    return process.env.EMBER_ENV === 'production';
  }
};
