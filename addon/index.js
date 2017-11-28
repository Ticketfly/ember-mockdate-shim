/* globals MockDate */

import Ember from 'ember';
import { get, trySet } from "@ember/object";

const originalDate = Date;
const originalPlatformNow = get(Ember, 'run.backburner._platform.now');

const { set, reset } = MockDate || {
  set() {},
  reset() {}
};

/*
 * The backburner.js _platform.now function must be overridden when using this
 * addon in acceptance tests that return async model hooks. Otherwise the ember
 * run loop gets itself into an infinite loop as time will never progress.
 *
 * See this backburner PR for more info:
 * https://github.com/BackburnerJS/backburner.js/pull/264
 */
const freezeDateAt = (...args) => {
  trySet(Ember, 'run.backburner._platform.now', () => originalDate());
  set(args);
};

const unfreezeDate = (...args) => {
  trySet(Ember, 'run.backburner._platform.now', originalPlatformNow);
  reset(args);
};

export {
  freezeDateAt,
  unfreezeDate
};
