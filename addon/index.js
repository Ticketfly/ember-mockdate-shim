/* globals MockDate */

const { set, reset } = MockDate || {
  set() {},
  reset() {}
};

export {
  set as freezeDateAt,
  reset as unfreezeDate
};
