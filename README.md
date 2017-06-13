# ember-mockdate-shim

ES6 accessible module for [MockDate](https://github.com/boblauer/MockDate) within your Ember applications.

## Usage

`ember install ember-mockdate-shim`

MockDate's `set` and `reset` methods are renamed to `freezeDateAt` and `unfreezeDate` respectively.

```
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

freezeDate(new Date('1/12/2017'));
unfreezeDate();
```

This is primarily useful for keeping the time data consistent between tests in visual diffs (ie: [Percy](https://percy.io/)). Any library methods that rely on `new Date()` will return consistent outputs. For example: [`moment()`](https://github.com/moment/moment/) and [`faker.date.recent`](https://github.com/Marak/faker.js/blob/master/lib/date.js#L66)

You can use this in the `beforeEach` and `afterEach` hooks of your tests, or anywhere else you want to freeze the date at, how ever many times you want!

## Installation

* `git clone <repository-url>` this repository
* `cd ember-mockdate-shim`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
