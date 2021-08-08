import { Promise } from 'rsvp';
import { next } from '@ember/runloop';
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  // Return async model to test that embers run loop doesn't fall
  // into an infinite loop when freezing time in acceptance tests.
  model() {
    return new Promise((res) => next(() => res()));
  }
}
