import Route from "@ember/routing/route";
import { Promise } from "rsvp";
import { next } from "@ember/runloop";

export default Route.extend({
  // Return async model to test that embers run loop doesn't fall
  // into an infinite loop when freezing time in acceptance tests.
  model() {
    return new Promise((res => next(() => res())));
  },
});
