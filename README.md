# ember-mockdate-shim

[![Build Status](https://travis-ci.org/Ticketfly/ember-mockdate-shim.svg?branch=master)](https://travis-ci.org/Ticketfly/ember-mockdate-shim)

ES6 accessible module for [MockDate](https://github.com/boblauer/MockDate) within your Ember applications.

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above
  
## Installation

`ember install ember-mockdate-shim`

## Usage

MockDate's `set` and `reset` methods are renamed to `freezeDateAt` and `unfreezeDate` respectively.

```js
import { freezeDateAt, unfreezeDate } from 'ember-mockdate-shim';

freezeDateAt(new Date('1/12/2017'));
unfreezeDate();
```

This is primarily useful for keeping the time data consistent between tests (ie: for visual diffs a la [Percy](https://percy.io/)). Any library methods that rely on `new Date()` will return consistent outputs. For example: [`moment()`](https://github.com/moment/moment/) and [`faker.date.recent`](https://github.com/Marak/faker.js/blob/master/lib/date.js#L66)

You can use this in the `beforeEach` and `afterEach` hooks of your tests, or anywhere else you want to freeze the date at, how ever many times you want!

Please note that acceptance test support is only available in Ember >2.15.1 as that is when `backburner.js` introduced the ability to make "now" configurable. More info [here](https://github.com/BackburnerJS/backburner.js/commit/a6fe19eb26c2b7ed8360de19ca0cc9ae5b05f297).

For use cases outside of tests, keep in mind that the shim is not included in production builds. See [index.js](https://github.com/Ticketfly/ember-mockdate-shim/blob/master/index.js) for more info.


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
