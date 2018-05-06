const Sum = require('../src/math-utils');

test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3);
});
